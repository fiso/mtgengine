"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AdvanceScout extends UnimplementedCard {
  constructor(game) {
    super(game, "Advance Scout", "Battle Royale Box Set", "BRB");
  }
}

module.exports = AdvanceScout;
