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

use Valdi\Validator\Contains;
use Valdi\ValidationException;

class ContainsTest extends \PHPUnit_Framework_TestCase {

    public function testValidate() {
        $validator = new Contains();

        $this->assertTrue($validator->isValid('test', array('ES')));
        $this->assertTrue($validator->isValid('test', array('ES', true)));
        $this->assertTrue($validator->isValid('test', array('es', false)));

        $this->assertFalse($validator->isValid('test', array('ES', false)));
        $this->assertFalse($validator->isValid('test', array('123')));
        $this->assertFalse($validator->isValid('test', array('123', true)));

        $this->assertTrue($validator->isValid('', array('es')));
        $this->assertTrue($validator->isValid(null, array('es')));
    }

}
