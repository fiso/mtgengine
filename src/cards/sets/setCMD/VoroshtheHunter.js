"use strict";
const Constants = require ("../../../Constants");
const VoroshtheHunterBase = require("../setCM2/VoroshtheHunter");

class VoroshtheHunter extends VoroshtheHunterBase {
  constructor (game) {
    super(game, "Vorosh, the Hunter", "Commander 2011", "CMD");
  }
}

module.exports = VoroshtheHunter;
