"use strict";
const Constants = require ("../../../Constants");
const ErosionBase = require("../set4ED/Erosion");

class Erosion extends ErosionBase {
  constructor (game) {
    super(game, "Erosion", "The Dark", "DRK");
  }
}

module.exports = Erosion;
