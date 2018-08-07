"use strict";
const Constants = require ("../../../Constants");
const BloodBaronofVizkopaBase = require("../setIMA/BloodBaronofVizkopa");

class BloodBaronofVizkopa extends BloodBaronofVizkopaBase {
  constructor (game) {
    super(game, "Blood Baron of Vizkopa", "Dragon's Maze", "DGM");
  }
}

module.exports = BloodBaronofVizkopa;
