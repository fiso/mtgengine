"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AwakeningZone extends Card {
  constructor(game) {
    super(game, "Awakening Zone", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = AwakeningZone;
