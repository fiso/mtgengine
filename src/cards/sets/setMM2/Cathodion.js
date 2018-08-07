"use strict";
const Constants = require ("../../../Constants");
const CathodionBase = require("../setCM2/Cathodion");

class Cathodion extends CathodionBase {
  constructor (game) {
    super(game, "Cathodion", "Modern Masters 2015", "MM2");
  }
}

module.exports = Cathodion;
