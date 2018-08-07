"use strict";
const Constants = require ("../../../Constants");
const FallenAngelBase = require("../setA25/FallenAngel");

class FallenAngel extends FallenAngelBase {
  constructor (game) {
    super(game, "Fallen Angel", "Seventh Edition", "7ED");
  }
}

module.exports = FallenAngel;
