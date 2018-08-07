"use strict";
const Constants = require ("../../../Constants");
const FallenAngelBase = require("../setA25/FallenAngel");

class FallenAngel extends FallenAngelBase {
  constructor (game) {
    super(game, "Fallen Angel", "Commander Anthology", "CMA");
  }
}

module.exports = FallenAngel;
