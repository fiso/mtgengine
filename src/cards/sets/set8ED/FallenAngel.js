"use strict";
const Constants = require ("../../../Constants");
const FallenAngelBase = require("../setBTD/FallenAngel");

class FallenAngel extends FallenAngelBase {
  constructor (game) {
    super(game, "Fallen Angel", "Eighth Edition", "8ED");
  }
}

module.exports = FallenAngel;
