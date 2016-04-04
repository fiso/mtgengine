"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VolcanicDragonBase = require("../setATH/VolcanicDragon.js");

class VolcanicDragon extends VolcanicDragonBase {
  constructor(game) {
    super(game, "Volcanic Dragon", "Mirage", "MIR");
  }
}

module.exports = VolcanicDragon;
