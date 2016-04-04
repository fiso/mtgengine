"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MonkRealist extends Card {
  constructor(game) {
    super(game, "Monk Realist", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = MonkRealist;
