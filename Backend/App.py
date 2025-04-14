from flask import Flask

app = Flask(__name__)

@app.route("/api/<categoria>")
def producto(categoria):
    return categoria

if __name__ == "__main__":
    app.run(debug=True)