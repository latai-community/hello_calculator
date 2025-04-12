# calculator_controller.py
from flask import Blueprint, request, jsonify
from flasgger.utils import swag_from
from app.core.evaluator import evaluate_expression

calculate_bp = Blueprint("calculator", __name__)


@swag_from("app/calculate.yaml")
@calculate_bp.route("/calculate", methods=["POST"])
def calculate():
    data = request.get_json()
    expression = data.get("expression", "")

    try:
        result = evaluate_expression(expression)
        return jsonify({"result": result})
    except Exception as e:
        return jsonify({"error": str(e)}), 400
