"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HomingSliver extends Card {
  constructor(game) {
    super(game, "Homing Sliver", "Future Sight", "FUT");
  }
}

module.exports = HomingSliver;
