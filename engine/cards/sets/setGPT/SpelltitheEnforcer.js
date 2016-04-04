"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SpelltitheEnforcer extends Card {
  constructor(game) {
    super(game, "Spelltithe Enforcer", "Guildpact", "GPT");
  }
}

module.exports = SpelltitheEnforcer;
