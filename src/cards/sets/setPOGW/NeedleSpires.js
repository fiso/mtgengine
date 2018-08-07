"use strict";
const Constants = require ("../../../Constants");
const NeedleSpiresBase = require("../setOGW/NeedleSpires");

class NeedleSpires extends NeedleSpiresBase {
  constructor (game) {
    super(game, "Needle Spires", "Oath of the Gatewatch Promos", "POGW");
  }
}

module.exports = NeedleSpires;
