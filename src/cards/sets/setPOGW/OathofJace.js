"use strict";
const Constants = require ("../../../Constants");
const OathofJaceBase = require("../setOGW/OathofJace");

class OathofJace extends OathofJaceBase {
  constructor (game) {
    super(game, "Oath of Jace", "Oath of the Gatewatch Promos", "POGW");
  }
}

module.exports = OathofJace;
