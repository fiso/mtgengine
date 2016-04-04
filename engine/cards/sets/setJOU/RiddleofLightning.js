"use strict";
const Constants = require ("../../../Constants");
const RiddleofLightningBase = require("../setFUT/RiddleofLightning");

class RiddleofLightning extends RiddleofLightningBase {
  constructor(game) {
    super(game, "Riddle of Lightning", "Journey into Nyx", "JOU");
  }
}

module.exports = RiddleofLightning;
