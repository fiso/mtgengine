"use strict";
const Constants = require ("../../../Constants");
const RummagingGoblinBase = require("../setXLN/RummagingGoblin");

class RummagingGoblin extends RummagingGoblinBase {
  constructor (game) {
    super(game, "Rummaging Goblin", "Magic 2015", "M15");
  }
}

module.exports = RummagingGoblin;
