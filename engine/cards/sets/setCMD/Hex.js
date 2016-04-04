"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Hex extends Card {
  constructor(game) {
    super(game, "Hex", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = Hex;
