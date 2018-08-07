"use strict";
const Constants = require ("../../../Constants");
const GrasslandsBase = require("../setC17/Grasslands");

class Grasslands extends GrasslandsBase {
  constructor (game) {
    super(game, "Grasslands", "Vintage Masters", "VMA");
  }
}

module.exports = Grasslands;
