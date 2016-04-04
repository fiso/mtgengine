"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const NeedleStormBase = require("../set9ED/NeedleStorm.js");

class NeedleStorm extends NeedleStormBase {
  constructor(game) {
    super(game, "Needle Storm", "Tempest", "TMP");
  }
}

module.exports = NeedleStorm;
