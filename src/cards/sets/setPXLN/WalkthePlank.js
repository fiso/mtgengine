"use strict";
const Constants = require ("../../../Constants");
const WalkthePlankBase = require("../setXLN/WalkthePlank");

class WalkthePlank extends WalkthePlankBase {
  constructor (game) {
    super(game, "Walk the Plank", "Ixalan Promos", "PXLN");
  }
}

module.exports = WalkthePlank;
