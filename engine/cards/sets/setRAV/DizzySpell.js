"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DizzySpell extends UnimplementedCard {
  constructor(game) {
    super(game, "Dizzy Spell", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = DizzySpell;
