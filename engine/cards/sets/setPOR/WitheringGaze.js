"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WitheringGazeBase = require("../set9ED/WitheringGaze.js");

class WitheringGaze extends WitheringGazeBase {
  constructor(game) {
    super(game, "Withering Gaze", "Portal", "POR");
  }
}

module.exports = WitheringGaze;
