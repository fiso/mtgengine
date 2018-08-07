"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HumanSoldier extends UnimplementedCard {
  constructor (game) {
    super(game, "Human Soldier", "Shadows over Innistrad Tokens", "TSOI");
  }
}

module.exports = HumanSoldier;
