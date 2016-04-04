"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MartyrsBond extends Card {
  constructor(game) {
    super(game, "Martyr's Bond", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = MartyrsBond;
