"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VolcanicDragonBase = require("../setATH/VolcanicDragon.js");

class VolcanicDragon extends VolcanicDragonBase {
  constructor(game) {
    super(game, "Volcanic Dragon", "Starter 1999", "S99");
  }
}

module.exports = VolcanicDragon;
