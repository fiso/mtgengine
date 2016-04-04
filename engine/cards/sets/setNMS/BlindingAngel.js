"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BlindingAngelBase = require("../set8ED/BlindingAngel.js");

class BlindingAngel extends BlindingAngelBase {
  constructor(game) {
    super(game, "Blinding Angel", "Nemesis", "NMS");
  }
}

module.exports = BlindingAngel;
