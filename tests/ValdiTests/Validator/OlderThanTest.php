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

use Exception;
use PHPUnit_Framework_TestCase;
use Valdi\Validator\OlderThan;
use Valdi\ValidationException;

class OlderThanTest extends \PHPUnit\Framework\TestCase
{

    public function testValidate()
    {
        $validator = new OlderThan();

        $this->assertTrue($validator->isValid(date('Y-m-d H:i:s', time() - 15), [10]));
        $this->assertTrue($validator->isValid(date('YmdHis', time() - 15), [10, 'YmdHis']));

        $this->assertFalse($validator->isValid(date('Y-m-d H:i:s', time() - 5), [10]));
        $this->assertFalse($validator->isValid(date('YmdHis', time() - 5), [10, 'YmdHis']));
        $this->assertFalse($validator->isValid(date('test', time() - 10), [5]));

        $this->assertTrue($validator->isValid('', [10]));
        $this->assertTrue($validator->isValid(null, [10]));

        try {
            $this->assertTrue($validator->isValid(date('Y-m-d H:i:s', time() - 5), []));
            $this->fail();
        } catch (ValidationException $e) {
            $read = $e->getMessage();
            $expected = '"olderThan" expects at least 1 parameter.';
            $this->assertSame($read, $expected);
        } catch (Exception $e) {
            $this->fail();
        }
    }

}
