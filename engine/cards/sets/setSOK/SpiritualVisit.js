"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SpiritualVisit extends Card {
  constructor(game) {
    super(game, "Spiritual Visit", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = SpiritualVisit;
