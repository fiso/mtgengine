"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DeathlessBehemoth extends UnimplementedCard {
  constructor(game) {
    super(game, "Deathless Behemoth", "Battle for Zendikar", "BFZ");
  }
}

module.exports = DeathlessBehemoth;
