"use strict";
const Constants = require ("../../../Constants");
const VolcanicDragonBase = require("../setATH/VolcanicDragon");

class VolcanicDragon extends VolcanicDragonBase {
  constructor (game) {
    super(game, "Volcanic Dragon", "Starter 1999", "S99");
  }
}

module.exports = VolcanicDragon;
