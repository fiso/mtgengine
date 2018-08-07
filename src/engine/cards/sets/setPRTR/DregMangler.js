"use strict";
const Constants = require ("../../../Constants");
const DregManglerBase = require("../setRTR/DregMangler");

class DregMangler extends DregManglerBase {
  constructor (game) {
    super(game, "Dreg Mangler", "Return to Ravnica Promos", "PRTR");
  }
}

module.exports = DregMangler;
