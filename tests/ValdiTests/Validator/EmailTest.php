<?php

namespace ValdiTests\Validator;

use Valdi\Validator\Email;

class EmailTest extends \PHPUnit_Framework_TestCase {

    public function testValidate() {
        $validator = new Email();

        $this->assertTrue($validator->validate('test@test.de', array()));

        $this->assertFalse($validator->validate('test.de', array()));
        $this->assertFalse($validator->validate('@test.de', array()));
        $this->assertFalse($validator->validate('test', array()));

        $this->assertTrue($validator->validate('', array()));
        $this->assertTrue($validator->validate(null, array()));
    }

}