# no.5 Seajax Utils

A utility library for the [Seadragon AJAX viewer] (http://expression.microsoft.com/en-us/gg413362.aspx). no.5 Seajax Utils act as a bridge between Seadragon AJAX and the [Raphael] (http://raphaeljs.com) JavaScript vector drawing & animation library, so that  Raphael drawing elements can be used as overlays on Deep Zoom images. In addition, no.5 Seajax Utils provide a number of extras, such as additional tile source implementations. 

An online demo of Raphael integration can be found [here] (http://maps.no5.at/seajax-utils-demo/example.html).

An online demo of the OpenStreetMap tile source can be found [here] (http://maps.no5.at/seajax-utils-demo/example-osm.html).

## Getting Started

The file _example.html_ illustrates how you can add Raphael drawing elements as overlays to a Deep Zoom image hosted on [zoom.it] (http://zoom.it/WwI0). You can find an online version of this [here] (http://maps.no5.at/seajax-utils-demo/example.html).

## Code Example

Note that the coordinate system for no.5 Seajax Utils is the original image's pixel coordinates! 

     function addOverlays() {
        var marker = new No5.Seajax.Shapes.Marker("pushpin-icon.png");
        marker.attachTo(viewer, 2000, 1750);

        var ellipse = new No5.Seajax.Shapes.Ellipse(1500, 500);    
        ellipse.attachTo(viewer, 20, 800);

        var points = new Array();
        points[0] = new Seadragon.Point(900, 900);
        points[1] = new Seadragon.Point(500, 100);
        points[2] = new Seadragon.Point(600, 600);
        points[3] = new Seadragon.Point(100, 500);
        var polygon = new No5.Seajax.Shapes.Polygon(points);
        polygon.attachTo(viewer);

        // Needed due to Seadragon AJAX FF bug
        setTimeout(function() { ellipse.redraw(viewer); }, 500);
     }

To set drawing attributes, animation behavior, event handlers, etc. you can get hold of the Raphael element with the getElement() method:

     ellipse.getElement().attr{("fill":"#ff0000", "fill-opacity":0.5, "stroke-width":"1px", "stroke":"#ffffff"})};

## Todos
* Although polygon coordinate transformation seems to work correctly, there's a scaling factor of 2 required which I can't explain (may be because of the way zooming factors are defined in Seajax. See comment in source code of Polygon.js) -> investigate this!
* Currently, only Marker, Ellipse and Polygon are implemented. All else is yet to come...
* Need to add an online sample for the TMS tile source
* Prepare a minified version using the [Closure Compiler] (http://code.google.com/closure/compiler/)
