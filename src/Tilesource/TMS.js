/**
 * A tilesource implementation for TMS (as supported by OpenLayers). 
 */
No5.Seajax.Tilesource.TMS = function(baseurl, width, height) {
   // TMS has integer multiples of 256 for width/height and adds buffer
   // if necessary -> account for this!
   var bufferedWidth = Math.ceil(width / 256) * 256;
   var bufferedHeight = Math.ceil(height / 256) * 256;

   // Compute number of zoomlevels in this tileset
   var max;
   if (bufferedWidth > bufferedHeight) {
      max = bufferedWidth / 256;
   } else {
      max = bufferedHeight / 256;
   }
   var levels = Math.ceil(Math.log(max)/Math.log(2));

   // Number of y tiles at highest zoom level
   var h = bufferedHeight / 256;

   // Construct the TileSource
   var ts = new Seadragon.TileSource(bufferedWidth, bufferedHeight, 256, 0);
   ts.getTileUrl = function(zoom, x, y) {
      // Convert from Deep Zoom definition to TMS zoom definition
      var z = zoom - 8;
      
      // Number of y tiles at this zoom level
      var yTiles = Math.ceil(h / Math.pow(2, levels - z)) - 1;

      return baseurl + z + "/" + x + "/" +  (yTiles - y) + ".jpg";
   }
   return ts;
}