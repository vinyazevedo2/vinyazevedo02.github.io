from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

# Dados de exemplo (você pode substituir por uma base de dados real)
historico = []
saldo = 0

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/registrar_gasto', methods=['POST'])
def registrar_gasto():
    global saldo
    data = request.get_json()
    valor = float(data['valor'])
    descricao = data['descricao']
    data_transacao = data['data']
    historico.append({"tipo": "gasto", "valor": valor, "descricao": descricao, "data": data_transacao})
    saldo -= valor
    return jsonify({"saldo": saldo})

@app.route('/registrar_receita', methods=['POST'])
def registrar_receita():
    global saldo
    data = request.get_json()
    valor = float(data['valor'])
    descricao = data['descricao']
    data_transacao = data['data']
    historico.append({"tipo": "receita", "valor": valor, "descricao": descricao, "data": data_transacao})
    saldo += valor
    return jsonify({"saldo": saldo})

@app.route('/historico')
def mostrar_historico():
    return jsonify({"historico": historico})

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=8080)