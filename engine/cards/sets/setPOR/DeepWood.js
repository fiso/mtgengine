"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DeepWood extends Card {
  constructor(game) {
    super(game, "Deep Wood", "Portal", "POR");
  }
}

module.exports = DeepWood;
