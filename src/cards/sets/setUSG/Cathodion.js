"use strict";
const Constants = require ("../../../Constants");
const CathodionBase = require("../setC14/Cathodion");

class Cathodion extends CathodionBase {
  constructor (game) {
    super(game, "Cathodion", "Urza's Saga", "USG");
  }
}

module.exports = Cathodion;
