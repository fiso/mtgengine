"use strict";
const Constants = require ("../../../Constants");
const FallenAngelBase = require("../setA25/FallenAngel");

class FallenAngel extends FallenAngelBase {
  constructor (game) {
    super(game, "Fallen Angel", "Legends", "LEG");
  }
}

module.exports = FallenAngel;
