"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TraitorsClutch extends Card {
  constructor(game) {
    super(game, "Traitor's Clutch", "Time Spiral", "TSP");
  }
}

module.exports = TraitorsClutch;
