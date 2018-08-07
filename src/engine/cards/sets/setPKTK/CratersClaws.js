"use strict";
const Constants = require ("../../../Constants");
const CratersClawsBase = require("../setKTK/CratersClaws");

class CratersClaws extends CratersClawsBase {
  constructor (game) {
    super(game, "Crater's Claws", "Khans of Tarkir Promos", "PKTK");
  }
}

module.exports = CratersClaws;
