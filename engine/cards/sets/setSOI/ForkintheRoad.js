"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ForkintheRoad extends Card {
  constructor(game) {
    super(game, "Fork in the Road", "Shadows over Innistrad", "SOI");
  }
}

module.exports = ForkintheRoad;
