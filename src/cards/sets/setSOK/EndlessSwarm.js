"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EndlessSwarm extends UnimplementedCard {
  constructor(game) {
    super(game, "Endless Swarm", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = EndlessSwarm;
