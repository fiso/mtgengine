"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Swarmyard extends UnimplementedCard {
  constructor (game) {
    super(game, "Swarmyard", "Time Spiral", "TSP");
  }
}

module.exports = Swarmyard;
