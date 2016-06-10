"use strict";
const Constants = require ("../../../Constants");
const SteadfastnessBase = require("../setPOR/Steadfastness");

class Steadfastness extends SteadfastnessBase {
  constructor (game) {
    super(game, "Steadfastness", "Starter 1999", "S99");
  }
}

module.exports = Steadfastness;
