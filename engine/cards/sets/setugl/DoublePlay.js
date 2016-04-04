"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DoublePlay extends Card {
  constructor(game) {
    super(game, "Double Play", "Unglued", "UGL");
  }
}

module.exports = DoublePlay;
