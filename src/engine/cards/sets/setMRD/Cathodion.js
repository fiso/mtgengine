"use strict";
const Constants = require ("../../../Constants");
const CathodionBase = require("../setCM2/Cathodion");

class Cathodion extends CathodionBase {
  constructor (game) {
    super(game, "Cathodion", "Mirrodin", "MRD");
  }
}

module.exports = Cathodion;
