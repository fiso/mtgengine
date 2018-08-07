"use strict";
const Constants = require ("../../../Constants");
const BloodBaronofVizkopaBase = require("../setIMA/BloodBaronofVizkopa");

class BloodBaronofVizkopa extends BloodBaronofVizkopaBase {
  constructor (game) {
    super(game, "Blood Baron of Vizkopa", "Commander 2017", "C17");
  }
}

module.exports = BloodBaronofVizkopa;
