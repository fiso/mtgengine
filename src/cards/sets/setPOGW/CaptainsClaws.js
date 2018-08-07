"use strict";
const Constants = require ("../../../Constants");
const CaptainsClawsBase = require("../setOGW/CaptainsClaws");

class CaptainsClaws extends CaptainsClawsBase {
  constructor (game) {
    super(game, "Captain's Claws", "Oath of the Gatewatch Promos", "POGW");
  }
}

module.exports = CaptainsClaws;
