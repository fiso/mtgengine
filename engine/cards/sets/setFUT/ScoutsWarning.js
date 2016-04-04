"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ScoutsWarning extends Card {
  constructor(game) {
    super(game, "Scout's Warning", "Future Sight", "FUT");
  }
}

module.exports = ScoutsWarning;
