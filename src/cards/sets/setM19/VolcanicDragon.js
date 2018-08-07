"use strict";
const Constants = require ("../../../Constants");
const VolcanicDragonBase = require("../setMTGA/VolcanicDragon");

class VolcanicDragon extends VolcanicDragonBase {
  constructor (game) {
    super(game, "Volcanic Dragon", "Core Set 2019", "M19");
  }
}

module.exports = VolcanicDragon;
