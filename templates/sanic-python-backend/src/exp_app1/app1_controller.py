"""_summary_
    Example module
    Returns:
        _type_: _description_
"""

from sanic import Blueprint
from sanic import response

blueprint_group1 = Blueprint('exsample_app1', url_prefix='/app1')

@blueprint_group1.route('/salute')
async def hello_api(request) -> str:
    """_summary_
    Basic hello world script
    Args:
        request (_type_): _description_

    Returns:
        str: _description_
    """
    return response.text('Hello, World!!')

