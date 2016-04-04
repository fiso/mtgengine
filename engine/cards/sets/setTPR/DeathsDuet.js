"use strict";
const Constants = require ("../../../Constants");
const DeathsDuetBase = require("../setEXO/DeathsDuet");

class DeathsDuet extends DeathsDuetBase {
  constructor(game) {
    super(game, "Death's Duet", "Tempest Remastered", "TPR");
  }
}

module.exports = DeathsDuet;
