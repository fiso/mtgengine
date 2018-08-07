"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SwarmIntelligence extends UnimplementedCard {
  constructor (game) {
    super(game, "Swarm Intelligence", "Hour of Devastation", "HOU");
  }
}

module.exports = SwarmIntelligence;
