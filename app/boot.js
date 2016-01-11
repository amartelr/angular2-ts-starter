System.register(['angular2/platform/browser', './app.component', './hello-world'], function(exports_1) {
    var browser_1, app_component_1, hello_world_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (hello_world_1_1) {
                hello_world_1 = hello_world_1_1;
            }],
        execute: function() {
            //This will instantiates our components
            browser_1.bootstrap(app_component_1.AppComponent);
            browser_1.bootstrap(hello_world_1.HelloWorldComponent);
        }
    }
});
//# sourceMappingURL=boot.js.map