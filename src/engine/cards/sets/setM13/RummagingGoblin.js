"use strict";
const Constants = require ("../../../Constants");
const RummagingGoblinBase = require("../setXLN/RummagingGoblin");

class RummagingGoblin extends RummagingGoblinBase {
  constructor (game) {
    super(game, "Rummaging Goblin", "Magic 2013", "M13");
  }
}

module.exports = RummagingGoblin;
