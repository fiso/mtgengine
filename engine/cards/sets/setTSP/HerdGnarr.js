"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HerdGnarr extends Card {
  constructor(game) {
    super(game, "Herd Gnarr", "Time Spiral", "TSP");
  }
}

module.exports = HerdGnarr;
