"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RiddleofLightningBase = require("../setFUT/RiddleofLightning.js");

class RiddleofLightning extends RiddleofLightningBase {
  constructor(game) {
    super(game, "Riddle of Lightning", "Journey into Nyx", "JOU");
  }
}

module.exports = RiddleofLightning;
