"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HumanCleric extends UnimplementedCard {
  constructor (game) {
    super(game, "Human Cleric", "Shadows over Innistrad Tokens", "TSOI");
  }
}

module.exports = HumanCleric;
