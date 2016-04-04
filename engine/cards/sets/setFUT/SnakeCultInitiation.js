"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SnakeCultInitiation extends Card {
  constructor(game) {
    super(game, "Snake Cult Initiation", "Future Sight", "FUT");
  }
}

module.exports = SnakeCultInitiation;
