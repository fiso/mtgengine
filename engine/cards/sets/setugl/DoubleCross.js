"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DoubleCross extends Card {
  constructor(game) {
    super(game, "Double Cross", "Unglued", "UGL");
  }
}

module.exports = DoubleCross;
