"use strict";
const Constants = require ("../../../Constants");
const LeadenMyrBase = require("../setMRD/LeadenMyr");

class LeadenMyr extends LeadenMyrBase {
  constructor(game) {
    super(game, "Leaden Myr", "Scars of Mirrodin", "SOM");
  }
}

module.exports = LeadenMyr;
