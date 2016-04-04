"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AvenMindcensor extends Card {
  constructor(game) {
    super(game, "Aven Mindcensor", "Future Sight", "FUT");
  }
}

module.exports = AvenMindcensor;
