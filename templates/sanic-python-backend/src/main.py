from sanic import Sanic
from sanic.response import text
from exp_app1.app1_controller import blueprint_group1 #TODO: Cleanup imports

# Instantiating Sanic app
app = Sanic('SampleApp')

# Register blueprint to the main app's instance
# Note: Sanic's blueprint provide a way to plug new api group to the main module.

app.blueprint(blueprint_group1)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8080, debug=True, auto_reload=False)

# Sample API, should leave as is or modify for health check
@app.get("/")
async def hello_world(request):
    return text("Hello, world.")
 
        