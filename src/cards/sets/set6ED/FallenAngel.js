"use strict";
const Constants = require ("../../../Constants");
const FallenAngelBase = require("../setBTD/FallenAngel");

class FallenAngel extends FallenAngelBase {
  constructor(game) {
    super(game, "Fallen Angel", "Classic Sixth Edition", "6ED");
  }
}

module.exports = FallenAngel;
