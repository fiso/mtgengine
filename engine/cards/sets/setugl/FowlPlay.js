"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FowlPlay extends Card {
  constructor(game) {
    super(game, "Fowl Play", "Unglued", "UGL");
  }
}

module.exports = FowlPlay;
