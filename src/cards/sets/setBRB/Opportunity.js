"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Opportunity extends UnimplementedCard {
  constructor (game) {
    super(game, "Opportunity", "Battle Royale Box Set", "BRB");
  }
}

module.exports = Opportunity;
