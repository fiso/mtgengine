"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShamblingSwarm extends UnimplementedCard {
  constructor(game) {
    super(game, "Shambling Swarm", "Torment", "TOR");
  }
}

module.exports = ShamblingSwarm;
