"use strict";
const Constants = require ("../../../Constants");
const FlameblastDragonBase = require("../setARC/FlameblastDragon");

class FlameblastDragon extends FlameblastDragonBase {
  constructor(game) {
    super(game, "Flameblast Dragon", "Magic 2012", "M12");
  }
}

module.exports = FlameblastDragon;
