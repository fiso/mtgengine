"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FurnaceCelebration extends Card {
  constructor(game) {
    super(game, "Furnace Celebration", "Commander 2013 Edition", "C13");
  }
}

module.exports = FurnaceCelebration;
