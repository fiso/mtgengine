"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SproutSwarm extends UnimplementedCard {
  constructor (game) {
    super(game, "Sprout Swarm", "Future Sight", "FUT");
  }
}

module.exports = SproutSwarm;
