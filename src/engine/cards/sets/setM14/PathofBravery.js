"use strict";
const Constants = require ("../../../Constants");
const PathofBraveryBase = require("../setIMA/PathofBravery");

class PathofBravery extends PathofBraveryBase {
  constructor (game) {
    super(game, "Path of Bravery", "Magic 2014", "M14");
  }
}

module.exports = PathofBravery;
