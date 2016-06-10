"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HerdGnarr extends UnimplementedCard {
  constructor (game) {
    super(game, "Herd Gnarr", "Time Spiral", "TSP");
  }
}

module.exports = HerdGnarr;
