"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SurrakarSpellbladeBase = require("../setMM2/SurrakarSpellblade.js");

class SurrakarSpellblade extends SurrakarSpellbladeBase {
  constructor(game) {
    super(game, "Surrakar Spellblade", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = SurrakarSpellblade;
