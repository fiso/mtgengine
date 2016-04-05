"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Counterspell extends UnimplementedCard {
  constructor(game) {
    super(game, "Counterspell", "Battle Royale Box Set", "BRB");
  }
}

module.exports = Counterspell;
