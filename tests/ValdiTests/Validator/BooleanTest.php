<?php

/*
 * This file is part of the Valdi package.
 *
 * (c) Philip Lehmann-Böhm <philip@philiplb.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace ValdiTests\Validator;

use Valdi\Validator\Boolean;

class BooleanTest extends \PHPUnit_Framework_TestCase {

    public function testValidate() {
        $validator = new Boolean();

        $this->assertTrue($validator->validate(1, array()));
        $this->assertTrue($validator->validate('1', array()));
        $this->assertTrue($validator->validate(true, array()));
        $this->assertTrue($validator->validate('on', array()));
        $this->assertTrue($validator->validate('yes', array()));

        $this->assertTrue($validator->validate(0, array()));
        $this->assertTrue($validator->validate('0', array()));
        $this->assertTrue($validator->validate(false, array()));
        $this->assertTrue($validator->validate('off', array()));
        $this->assertTrue($validator->validate('no', array()));
        $this->assertTrue($validator->validate('', array()));
        $this->assertTrue($validator->validate(null, array()));

        $this->assertFalse($validator->validate('test', array()));
    }

}
