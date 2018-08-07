"use strict";
const Constants = require ("../../../Constants");
const SwordPointDiplomacyBase = require("../setXLN/SwordPointDiplomacy");

class SwordPointDiplomacy extends SwordPointDiplomacyBase {
  constructor (game) {
    super(game, "Sword-Point Diplomacy", "Ixalan Promos", "PXLN");
  }
}

module.exports = SwordPointDiplomacy;
