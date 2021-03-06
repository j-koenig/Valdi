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

use PHPUnit_Framework_TestCase;
use Valdi\Validator\Required;

class RequiredTest extends \PHPUnit\Framework\TestCase
{

    public function testValidate()
    {
        $validator = new Required();

        $this->assertTrue($validator->isValid('test', []));

        $this->assertFalse($validator->isValid('', []));
        $this->assertFalse($validator->isValid(null, []));
    }

    public function testGetInvalidDetails()
    {
        $validator = new Required();
        $read = $validator->getInvalidDetails();
        $expected = 'required';
        $this->assertSame($read, $expected);
    }

}
