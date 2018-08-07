"use strict";
const Constants = require ("../../../Constants");
const GoblinFireslingerBase = require("../setMM2/GoblinFireslinger");

class GoblinFireslinger extends GoblinFireslingerBase {
  constructor (game) {
    super(game, "Goblin Fireslinger", "Magic 2012", "M12");
  }
}

module.exports = GoblinFireslinger;
