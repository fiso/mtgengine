"use strict";
const Constants = require ("../../../Constants");
const RummagingGoblinBase = require("../setM13/RummagingGoblin");

class RummagingGoblin extends RummagingGoblinBase {
  constructor(game) {
    super(game, "Rummaging Goblin", "Magic 2015 Core Set", "M15");
  }
}

module.exports = RummagingGoblin;
