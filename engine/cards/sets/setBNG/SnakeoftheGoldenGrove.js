"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SnakeoftheGoldenGrove extends Card {
  constructor(game) {
    super(game, "Snake of the Golden Grove", "Born of the Gods", "BNG");
  }
}

module.exports = SnakeoftheGoldenGrove;
