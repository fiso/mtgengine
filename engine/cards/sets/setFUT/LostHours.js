"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LostHours extends Card {
  constructor(game) {
    super(game, "Lost Hours", "Future Sight", "FUT");
  }
}

module.exports = LostHours;
