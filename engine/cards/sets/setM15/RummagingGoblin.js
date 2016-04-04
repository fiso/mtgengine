"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RummagingGoblinBase = require("../setM13/RummagingGoblin.js");

class RummagingGoblin extends RummagingGoblinBase {
  constructor(game) {
    super(game, "Rummaging Goblin", "Magic 2015 Core Set", "M15");
  }
}

module.exports = RummagingGoblin;
