"use strict";
const Constants = require ("../../../Constants");
const OathofGideonBase = require("../setOGW/OathofGideon");

class OathofGideon extends OathofGideonBase {
  constructor (game) {
    super(game, "Oath of Gideon", "Oath of the Gatewatch Promos", "POGW");
  }
}

module.exports = OathofGideon;
