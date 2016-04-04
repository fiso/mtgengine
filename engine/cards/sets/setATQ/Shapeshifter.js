"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Shapeshifter extends Card {
  constructor(game) {
    super(game, "Shapeshifter", "Antiquities", "ATQ");
  }
}

module.exports = Shapeshifter;
