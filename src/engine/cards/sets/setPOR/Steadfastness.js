"use strict";
const Constants = require ("../../../Constants");
const SteadfastnessBase = require("../setS99/Steadfastness");

class Steadfastness extends SteadfastnessBase {
  constructor (game) {
    super(game, "Steadfastness", "Portal", "POR");
  }
}

module.exports = Steadfastness;
