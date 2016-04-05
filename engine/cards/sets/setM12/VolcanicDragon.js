"use strict";
const Constants = require ("../../../Constants");
const VolcanicDragonBase = require("../setATH/VolcanicDragon");

class VolcanicDragon extends VolcanicDragonBase {
  constructor(game) {
    super(game, "Volcanic Dragon", "Magic 2012", "M12");
  }
}

module.exports = VolcanicDragon;
