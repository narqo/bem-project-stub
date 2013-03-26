Minimal configs and folders to start BEM project
================================================

Usage
-----

    › git clone git://github.com/narqo/bem-project-stub.git project
    › cd project
    › npm install
    › bem make vendor

This will install localy all project's dependencies from `npm` and download project's relative libraries.

Now you could starts local `bem server`. Type:

    › bem server

    Navigate to http://localhost:8080/desktop.bundles/index/index.html


Server will starts under HTTP port `8080`. So you could navigate to
http://localhost:8080/desktop.bundles/index/index.html.

**NOTE:** `bem` should be in your `PATH` environment variable. You could do this by adding this line to your user's
`.profile` config:

    exports PATH=./node_modules/.bin:$PATH

---

BEM is abbreviation for Block-Element-Modifier. It's a way to write code which is easy to support and develop.

For more info about BEM metodology see [bem.info](http://bem.info/).

