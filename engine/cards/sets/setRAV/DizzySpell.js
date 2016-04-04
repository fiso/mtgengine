"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DizzySpell extends Card {
  constructor(game) {
    super(game, "Dizzy Spell", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = DizzySpell;
