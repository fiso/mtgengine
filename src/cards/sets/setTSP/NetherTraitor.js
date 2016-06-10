"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NetherTraitor extends UnimplementedCard {
  constructor (game) {
    super(game, "Nether Traitor", "Time Spiral", "TSP");
  }
}

module.exports = NetherTraitor;
