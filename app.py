from flask import Flask, render_template, request
import matplotlib.pyplot as plt
import io, base64

app = Flask(__name__)

@app.route("/", methods=["GET", "POST"])
def budget():
    chart_url = None
    if request.method == "POST":
        income = float(request.form["income"])
        expenses = float(request.form["expenses"])
        savings = income - expenses

        # Create graph
        plt.figure(figsize=(3,2))
        categories = ["Income", "Expenses", "Savings"]
        values = [income, expenses, savings]
        plt.bar(categories, values, color=["green","red","blue"])
        plt.title("Budget Overview")

        buf = io.BytesIO()
        plt.savefig(buf, format="png")
        buf.seek(0)
        chart_url = base64.b64encode(buf.getvalue()).decode("utf-8")
        plt.close()

    return render_template("budget.html", chart_url=chart_url)

if __name__ == "__main__":
    app.run(debug=True)
