"use strict";
const Constants = require ("../../../Constants");
const VolcanicDragonBase = require("../setATH/VolcanicDragon");

class VolcanicDragon extends VolcanicDragonBase {
  constructor (game) {
    super(game, "Volcanic Dragon", "Classic Sixth Edition", "6ED");
  }
}

module.exports = VolcanicDragon;
