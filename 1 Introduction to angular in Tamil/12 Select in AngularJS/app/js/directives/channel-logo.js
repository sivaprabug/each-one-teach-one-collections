app.directive('channelLogo', function() {
    return {
        restrict: "AECM",
        /*template: "<div class='container'>  <div class='jumbotron'>    <h1>Bootstrap Tutorial</h1>     <p>Bootstrap is the most popular HTML, CSS, and JS framework for developing    responsive, mobile-first projects on the web.</p>   </div></div>"*/

        /*template: "<img src='images/flag.png' />"*/

        /*template: function() {
            return "<img src='images/flag.png'/>"
        }*/

        template: function(element,attribute) {
            console.log('element', element);
            console.log('attribute', attribute);
            return "<img class='"+ attribute.class +"' src='images/flag.png'/>"
        }
    }
});