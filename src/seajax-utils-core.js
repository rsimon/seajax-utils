/**
 * Namespace declarations
 */
No5 = {};
No5.Seajax = {};
No5.Seajax.Shapes = {};
No5.Seajax.Tilesource = {};

/**
 * Translates from Seajax viewer coordinate 
 * system to image coordinate system 
 */
No5.Seajax.toImageCoordinates = function(viewer, viewerX, viewerY) {
   return new Seadragon.Point(viewerX * viewer.source.width, viewerY * viewer.source.height * viewer.source.aspectRatio);
}

/**
 * Translates from image coordinate system to
 * Seajax viewer coordinate system 
 */
No5.Seajax.toWorldCoordinates = function(viewer, imageX, imageY) {
   return new Seadragon.Point(imageX / viewer.source.width, imageY / viewer.source.height / viewer.source.aspectRatio);
}
