"use strict";
const Constants = require ("../../../Constants");
const WitheringGazeBase = require("../set9ED/WitheringGaze");

class WitheringGaze extends WitheringGazeBase {
  constructor(game) {
    super(game, "Withering Gaze", "Portal", "POR");
  }
}

module.exports = WitheringGaze;
