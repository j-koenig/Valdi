<?php

/*
 * This file is part of the Valdi package.
 *
 * (c) Philip Lehmann-Böhm <philip@philiplb.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Valdi\Validator;

use Valdi\ValidationException;

/**
 * Validator for values being in a set.
 */
class InSet implements ValidatorInterface {

    /**
     * {@inheritdoc}
     */
    public function validate($value, array $parameters) {
        if (count($parameters) === 0) {
            throw new ValidationException('"set" expects at least one parameter.');
        }
        return $value === '' || $value === null ||
            in_array($value, $parameters);
    }
}
