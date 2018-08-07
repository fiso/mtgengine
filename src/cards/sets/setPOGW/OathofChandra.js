"use strict";
const Constants = require ("../../../Constants");
const OathofChandraBase = require("../setOGW/OathofChandra");

class OathofChandra extends OathofChandraBase {
  constructor (game) {
    super(game, "Oath of Chandra", "Oath of the Gatewatch Promos", "POGW");
  }
}

module.exports = OathofChandra;
