"use strict";
const Constants = require ("../../../Constants");
const SylvanRangerBase = require("../setCMA/SylvanRanger");

class SylvanRanger extends SylvanRangerBase {
  constructor (game) {
    super(game, "Sylvan Ranger", "Magic Online Promos", "PRM");
  }
}

module.exports = SylvanRanger;
