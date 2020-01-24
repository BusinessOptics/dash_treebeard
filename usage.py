import dash_treebeard
import dash
from dash.dependencies import Input, Output
import dash_html_components as html
import json
from textwrap import dedent

app = dash.Dash(__name__)

data = {
    "name": "root",
    "key": "__root__",
    "children": [
        {
            "key": "A",
            "name": "A",
            "children": [{"name": "1", "key": "A.1"}, {"name": "2", "key": "A.2"},],
        },
        {
            "name": "B",
            "key": "B",
            "children": [
                {
                    "name": "X",
                    "key": "B.X",
                    "children": [
                        {"name": "1", "key": "B.X.1"},
                        {"name": "2", "key": "B.X.2"},
                    ],
                },
            ],
        },
    ],
}

app.layout = html.Div(
    [
        dash_treebeard.DashTreebeard(id="input", data=data, persistence=True),
        html.Pre(id="output"),
    ]
)


@app.callback(
    Output("output", "children"),
    [Input("input", "selected"), Input("input", "toggled")],
)
def display_output(selected, toggled):
    return dedent(
        f"""
        You have selected {selected}
        You have toggled {toggled}
        """
    )


if __name__ == "__main__":
    app.run_server(debug=True)
