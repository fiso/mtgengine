"use strict";
const Constants = require ("../../../Constants");
const CathodionBase = require("../setCM2/Cathodion");

class Cathodion extends CathodionBase {
  constructor (game) {
    super(game, "Cathodion", "Commander 2014", "C14");
  }
}

module.exports = Cathodion;
