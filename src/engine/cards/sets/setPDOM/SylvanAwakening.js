"use strict";
const Constants = require ("../../../Constants");
const SylvanAwakeningBase = require("../setDOM/SylvanAwakening");

class SylvanAwakening extends SylvanAwakeningBase {
  constructor (game) {
    super(game, "Sylvan Awakening", "Dominaria Promos", "PDOM");
  }
}

module.exports = SylvanAwakening;
