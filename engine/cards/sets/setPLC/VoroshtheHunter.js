"use strict";
const Constants = require ("../../../Constants");
const VoroshtheHunterBase = require("../setCMD/VoroshtheHunter");

class VoroshtheHunter extends VoroshtheHunterBase {
  constructor(game) {
    super(game, "Vorosh, the Hunter", "Planar Chaos", "PLC");
  }
}

module.exports = VoroshtheHunter;
