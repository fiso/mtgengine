"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Symbiosis extends UnimplementedCard {
  constructor(game) {
    super(game, "Symbiosis", "Battle Royale Box Set", "BRB");
  }
}

module.exports = Symbiosis;
