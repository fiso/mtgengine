"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Delay extends Card {
  constructor(game) {
    super(game, "Delay", "Future Sight", "FUT");
  }
}

module.exports = Delay;
