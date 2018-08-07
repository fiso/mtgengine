"use strict";
const Constants = require ("../../../Constants");
const WalkthePlankBase = require("../setXLN/WalkthePlank");

class WalkthePlank extends WalkthePlankBase {
  constructor (game) {
    super(game, "Walk the Plank", "Magic Online Promos", "PRM");
  }
}

module.exports = WalkthePlank;
