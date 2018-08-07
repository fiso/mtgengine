"use strict";
const Constants = require ("../../../Constants");
const MyrBattlesphereBase = require("../setC18/MyrBattlesphere");

class MyrBattlesphere extends MyrBattlesphereBase {
  constructor (game) {
    super(game, "Myr Battlesphere", "Duel Decks: Elves vs. Inventors", "DDU");
  }
}

module.exports = MyrBattlesphere;
