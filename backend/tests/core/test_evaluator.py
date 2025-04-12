import pytest
from app.core.evaluator import evaluate_expression


def test_basic_operations():
    assert evaluate_expression("2+2") == 4
    assert evaluate_expression("10-5") == 5
    assert evaluate_expression("2*3") == 6
    assert evaluate_expression("8/2") == 4


def test_parentheses_and_order():
    assert evaluate_expression("2*(3+4)") == 14
    assert evaluate_expression("(2+3)*4") == 20
    assert evaluate_expression("2+(3*4)") == 14


def test_unary_operations():
    assert evaluate_expression("-5") == -5
    assert evaluate_expression("-(3+2)") == -5


def test_power_and_modulo():
    assert evaluate_expression("2**3") == 8
    assert evaluate_expression("10%3") == 1


def test_invalid_expression_raises():
    with pytest.raises(ValueError):
        evaluate_expression("2 +")
    with pytest.raises(ValueError):
        evaluate_expression("hello world")
    with pytest.raises(ValueError):
        evaluate_expression("__import__('os').system('rm -rf /')")


def test_injection_attempt():
    with pytest.raises(ValueError):
        evaluate_expression("().__class__.__bases__")


def test_division_by_zero():
    with pytest.raises(ZeroDivisionError):
        evaluate_expression("5/0")
