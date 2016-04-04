"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Stranglehold extends Card {
  constructor(game) {
    super(game, "Stranglehold", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = Stranglehold;
