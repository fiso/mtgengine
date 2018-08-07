"use strict";
const Constants = require ("../../../Constants");
const AssassinsStrikeBase = require("../setBBD/AssassinsStrike");

class AssassinsStrike extends AssassinsStrikeBase {
  constructor (game) {
    super(game, "Assassin's Strike", "Return to Ravnica", "RTR");
  }
}

module.exports = AssassinsStrike;
