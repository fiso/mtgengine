"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BronzeTablet extends Card {
  constructor(game) {
    super(game, "Bronze Tablet", "Antiquities", "ATQ");
  }
}

module.exports = BronzeTablet;
