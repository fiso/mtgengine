"use strict";
const Constants = require ("../../../Constants");
const DeathsDuetBase = require("../setTPR/DeathsDuet");

class DeathsDuet extends DeathsDuetBase {
  constructor (game) {
    super(game, "Death's Duet", "Exodus", "EXO");
  }
}

module.exports = DeathsDuet;
