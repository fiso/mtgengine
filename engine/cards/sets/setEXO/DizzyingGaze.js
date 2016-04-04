"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DizzyingGaze extends Card {
  constructor(game) {
    super(game, "Dizzying Gaze", "Exodus", "EXO");
  }
}

module.exports = DizzyingGaze;
