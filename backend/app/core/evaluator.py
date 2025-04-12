import ast
import operator
import re

OPERATORS = {
    ast.Add: operator.add,
    ast.Sub: operator.sub,
    ast.Mult: operator.mul,
    ast.Div: operator.truediv,
    ast.USub: operator.neg,
    ast.Pow: operator.pow,
    ast.Mod: operator.mod
}


def insert_implicit_multiplication(expr: str) -> str:
    # Ej: 2(3+4) -> 2*(3+4), (3+2)(1+1) -> (3+2)*(1+1), (5)6 -> (5)*6
    expr = re.sub(r'(\d|\))\s*(\()', r'\1*\2', expr)
    expr = re.sub(r'(\))\s*(\d)', r'\1*\2', expr)
    return expr


def is_valid_expression(expr: str) -> bool:
    # Validación básica: no vacío y paréntesis balanceados
    return bool(expr.strip()) and expr.count('(') == expr.count(')')


def evaluate_expression(expr: str) -> float:
    expr = insert_implicit_multiplication(expr)

    if not is_valid_expression(expr):
        raise ValueError("Invalid expression")

    try:
        node = ast.parse(expr, mode='eval')
    except SyntaxError:
        raise ValueError("Invalid expression")

    def _eval(node):
        if isinstance(node, ast.Expression):
            return _eval(node.body)
        elif isinstance(node, ast.BinOp):
            return OPERATORS[type(node.op)](_eval(node.left), _eval(node.right))
        elif isinstance(node, ast.UnaryOp):
            return OPERATORS[type(node.op)](_eval(node.operand))
        elif isinstance(node, ast.Num):
            return node.n
        else:
            raise ValueError("Invalid expression")

    return _eval(node)