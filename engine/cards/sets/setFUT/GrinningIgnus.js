"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GrinningIgnus extends Card {
  constructor(game) {
    super(game, "Grinning Ignus", "Future Sight", "FUT");
  }
}

module.exports = GrinningIgnus;
