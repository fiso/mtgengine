"use strict";
const Constants = require ("../../../Constants");
const VolcanicDragonBase = require("../setMTGA/VolcanicDragon");

class VolcanicDragon extends VolcanicDragonBase {
  constructor (game) {
    super(game, "Volcanic Dragon", "Portal", "POR");
  }
}

module.exports = VolcanicDragon;
