"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LeadenMyrBase = require("../setMRD/LeadenMyr.js");

class LeadenMyr extends LeadenMyrBase {
  constructor(game) {
    super(game, "Leaden Myr", "Scars of Mirrodin", "SOM");
  }
}

module.exports = LeadenMyr;
