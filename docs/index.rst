Welcome to Valdis documentation!
================================

This is the documentation of Valdi, a very easy to use, yet feature complete
data validation library.

Reasons to use Valdi:

* Easy to use
* Feature complete
* Lightweight, without dependencies
* Well documented
* Well tested
* Extensible

.. image:: ../valdi/valdi.png
    :align: center
    :width: 300px
    :height: 300px
    :alt: Valdi

(Big thanks to `Jamie Thormann <https://www.linkedin.com/in/jamie-thormann-937916109/>`_ for this awesome mascot!)

Requirements:

* PHP >= 5.5

Contents:

.. toctree::
    :caption: Manual

    manual/gettingstarted
    manual/validators
    manual/ownrules
    manual/rulesdatastructure

.. toctree::
    :caption: API

    api/RulesBuilder
    api/ValidationException
    api/Validator
    api/ValidatorException

    api/Validator/AbstractArray
    api/Validator/AbstractFilter
    api/Validator/AbstractParametrizedValidator
    api/Validator/Boolean
    api/Validator/Contains
    api/Validator/DateTime
    api/Validator/InSet
    api/Validator/OrCombine
    api/Validator/Required
    api/Validator/ValidatorInterface

Indices and tables
==================

* :ref:`genindex`
* :ref:`search`
