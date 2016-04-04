"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RiverofTears extends Card {
  constructor(game) {
    super(game, "River of Tears", "Future Sight", "FUT");
  }
}

module.exports = RiverofTears;
