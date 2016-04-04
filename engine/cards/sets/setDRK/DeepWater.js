"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DeepWater extends Card {
  constructor(game) {
    super(game, "Deep Water", "The Dark", "DRK");
  }
}

module.exports = DeepWater;
