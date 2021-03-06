<?php

/*
 * This file is part of the Valdi package.
 *
 * (c) Philip Lehmann-Böhm <philip@philiplb.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace ValdiTests;

use PHPUnit_Framework_TestCase;
use Valdi\RulesBuilder;
use Valdi\Validator;

class RulesBuilderTest extends \PHPUnit\Framework\TestCase
{

    public function testCreate()
    {
        $read = RulesBuilder::create();
        $expected = 'Valdi\RulesBuilder';
        $this->assertSame(get_class($read), $expected);
    }

    public function testRulesBuilding()
    {
        $read = RulesBuilder::create()
            ->field('a', 'required')
            ->field('b', 'inThePast')
            ->field('a', 'min', 42)
            ->field('c', 'slug')
            ->field('b', 'between', 5, 17)
            ->build();
        $expected = [
            'a' => [['required'], ['min', 42]],
            'b' => [['inThePast'], ['between', 5, 17]],
            'c' => [['slug']]
        ];
        $this->assertSame($read, $expected);
    }

    public function testCreatedRules()
    {
        $rules = RulesBuilder::create()
            ->field('a', 'required')
            ->field('b', 'min', 5)
            ->build();
        $data = ['a' => 'abc', 'b' => 6];
        $validator = new Validator();
        $read = $validator->isValid($rules, $data);
        $expected = [
            'valid' => true,
            'errors' => []
        ];
        $this->assertSame($read, $expected);
    }

    public function testCreatedCollectionRules()
    {
        $validator = new Validator();
        $builder = RulesBuilder::create();
        $elementRules = $builder->rule('min', 5)->build();
        $rules = $builder
            ->field('a', 'collection', $validator, $elementRules)
            ->build();
        $data = ['a' => [6, 7, 8]];
        $read = $validator->isValid($rules, $data);
        $expected = [
            'valid' => true,
            'errors' => []
        ];
        $this->assertSame($read, $expected);
        $data = ['a' => [6, 7, 1]];
        $read = $validator->isValid($rules, $data);
        $expected = [
            'valid' => false,
            'errors' => ['a' => [['collection' => [2 => ['min']]]]]
        ];
        $this->assertSame($read, $expected);
    }

}
