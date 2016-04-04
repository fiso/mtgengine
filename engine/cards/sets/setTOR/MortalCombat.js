"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MortalCombatBase = require("../set10E/MortalCombat.js");

class MortalCombat extends MortalCombatBase {
  constructor(game) {
    super(game, "Mortal Combat", "Torment", "TOR");
  }
}

module.exports = MortalCombat;
