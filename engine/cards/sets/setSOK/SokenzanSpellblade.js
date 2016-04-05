"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SokenzanSpellblade extends UnimplementedCard {
  constructor(game) {
    super(game, "Sokenzan Spellblade", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = SokenzanSpellblade;
