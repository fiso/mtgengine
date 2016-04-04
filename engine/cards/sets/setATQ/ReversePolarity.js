"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ReversePolarity extends Card {
  constructor(game) {
    super(game, "Reverse Polarity", "Antiquities", "ATQ");
  }
}

module.exports = ReversePolarity;
