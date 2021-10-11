from flask import Flask
from flask_cors import CORS, cross_origin
import ytd


app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/yt/<link>', methods=['POST', 'GET'])
@cross_origin()
def ytlink(link):
    ytlink = "https://www.youtube.com/watch?v=" + link
    ytl =  ytd.linkArray(ytlink)
    return {'links': ytl}

@app.route('/', methods=['GET', 'POST'])
@cross_origin()
def home():
    return """
    <div style="
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
">
    <a style="
                text-decoration: none;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            background-color: rgb(0, 195, 255);
            color: white;
            padding: 10px 15px;
            border-radius: 5px;
            font-weight: 600;
    " href="https://clientytd.herokuapp.com/">Go To YouTube Download App</a>
</div>

    """

@app.route('/ok', methods=['GET', 'POST'])
@cross_origin()
def ok():
    return {'counter':"🥴"}




if __name__ == '__main__':
    app.run(debug=True)