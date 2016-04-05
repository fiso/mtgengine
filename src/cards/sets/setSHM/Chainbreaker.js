"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Chainbreaker extends UnimplementedCard {
  constructor(game) {
    super(game, "Chainbreaker", "Shadowmoor", "SHM");
  }
}

module.exports = Chainbreaker;
