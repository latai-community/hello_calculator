# 🧮 Hello Calculator API

A simple Flask API to evaluate math expressions.

## 📦 Requirements

- Python 3.10 or higher  
  👉 Download it from: https://www.python.org/downloads/

## 🚀 How to run the project

Follow these steps to get the API running locally:

```bash
# 1. Clone the repository
git clone https://github.com/latai-community/hello_calculator.git
cd hello_calculator/backend

# 2. Create a virtual environment
python3 -m venv .venv

# 3. Activate the virtual environment
# On macOS/Linux:
source .venv/bin/activate
# On Windows:
.venv\Scripts\activate

# 4. Install dependencies
pip install -r requirements.txt

# 5. Run the application
python wsgi.py
```

The server will be running on:  
🌐 http://localhost:4000

Swagger UI available at:  
📄 http://localhost:4000/api/docs

## 📁 Project structure

```
backend/
├── app/
│   ├── controller/
│   │   └── calculator_controller.py
│   └── core/
│       └── evaluator.py
├── docs/
│   └── swagger.yaml
├── test/
├── main.py
├── wsgi.py
└── requirements.txt
```

---

🚀 Made with Flask + Swagger 

Powered by 🤖 and lots of ☕
 