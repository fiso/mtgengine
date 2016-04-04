"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FurnaceScamp extends Card {
  constructor(game) {
    super(game, "Furnace Scamp", "New Phyrexia", "NPH");
  }
}

module.exports = FurnaceScamp;
