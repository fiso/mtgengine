"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VoroshtheHunterBase = require("../setCMD/VoroshtheHunter.js");

class VoroshtheHunter extends VoroshtheHunterBase {
  constructor(game) {
    super(game, "Vorosh, the Hunter", "Planar Chaos", "PLC");
  }
}

module.exports = VoroshtheHunter;
