"use strict";
const Constants = require ("../../../Constants");
const DregManglerBase = require("../setDDJ/DregMangler");

class DregMangler extends DregManglerBase {
  constructor (game) {
    super(game, "Dreg Mangler", "Return to Ravnica", "RTR");
  }
}

module.exports = DregMangler;
