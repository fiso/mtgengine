"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CourierHawk extends Card {
  constructor(game) {
    super(game, "Courier Hawk", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = CourierHawk;
