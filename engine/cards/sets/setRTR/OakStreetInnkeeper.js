"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class OakStreetInnkeeper extends Card {
  constructor(game) {
    super(game, "Oak Street Innkeeper", "Return to Ravnica", "RTR");
  }
}

module.exports = OakStreetInnkeeper;
