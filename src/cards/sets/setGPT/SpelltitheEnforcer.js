"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpelltitheEnforcer extends UnimplementedCard {
  constructor(game) {
    super(game, "Spelltithe Enforcer", "Guildpact", "GPT");
  }
}

module.exports = SpelltitheEnforcer;
