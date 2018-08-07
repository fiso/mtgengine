"use strict";
const Constants = require ("../../../Constants");
const RiddleofLightningBase = require("../setJOU/RiddleofLightning");

class RiddleofLightning extends RiddleofLightningBase {
  constructor (game) {
    super(game, "Riddle of Lightning", "Future Sight", "FUT");
  }
}

module.exports = RiddleofLightning;
