"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TakePossession extends Card {
  constructor(game) {
    super(game, "Take Possession", "Future Sight", "FUT");
  }
}

module.exports = TakePossession;
