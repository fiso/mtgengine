"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HedronRover extends Card {
  constructor(game) {
    super(game, "Hedron Rover", "Worldwake", "WWK");
  }
}

module.exports = HedronRover;
