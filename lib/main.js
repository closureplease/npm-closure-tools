

var compiler = {};

// really dump and dangerous
var rootPath = 'node_modules/closure-tools/';

/**
 * Full path and filename to vanilla compiler.
 * @param  {string} filename [description]
 * @return {string} The full path.
 */
compiler.getPath = function( filename ) {
  return rootPath + filename;
};

module.exports = compiler;