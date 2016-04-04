"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CadaverousKnightBase = require("../setMIR/CadaverousKnight.js");

class CadaverousKnight extends CadaverousKnightBase {
  constructor(game) {
    super(game, "Cadaverous Knight", "Planechase", "HOP");
  }
}

module.exports = CadaverousKnight;
