"use strict";
const Constants = require ("../../../Constants");
const GrasslandsBase = require("../setDDG/Grasslands");

class Grasslands extends GrasslandsBase {
  constructor (game) {
    super(game, "Grasslands", "Mirage", "MIR");
  }
}

module.exports = Grasslands;
