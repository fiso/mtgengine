"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RiddleofLightning extends Card {
  constructor(game) {
    super(game, "Riddle of Lightning", "Future Sight", "FUT");
  }
}

module.exports = RiddleofLightning;
