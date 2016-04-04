"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BuriedAlive extends Card {
  constructor(game) {
    super(game, "Buried Alive", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = BuriedAlive;
