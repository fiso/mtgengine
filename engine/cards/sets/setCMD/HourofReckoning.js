"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HourofReckoning extends Card {
  constructor(game) {
    super(game, "Hour of Reckoning", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = HourofReckoning;
