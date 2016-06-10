"use strict";
const Constants = require ("../../../Constants");
const ThopterSquadronBase = require("../setEXO/ThopterSquadron");

class ThopterSquadron extends ThopterSquadronBase {
  constructor (game) {
    super(game, "Thopter Squadron", "Tempest Remastered", "TPR");
  }
}

module.exports = ThopterSquadron;
