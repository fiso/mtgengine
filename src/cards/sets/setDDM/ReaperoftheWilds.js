"use strict";
const Constants = require ("../../../Constants");
const ReaperoftheWildsBase = require("../setCP2/ReaperoftheWilds");

class ReaperoftheWilds extends ReaperoftheWildsBase {
  constructor (game) {
    super(game, "Reaper of the Wilds", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = ReaperoftheWilds;
