"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Weakness extends UnimplementedCard {
  constructor(game) {
    super(game, "Weakness", "Battle Royale Box Set", "BRB");
  }
}

module.exports = Weakness;
