"use strict";
const Constants = require ("../../../Constants");
const SylvanRangerBase = require("../setCMA/SylvanRanger");

class SylvanRanger extends SylvanRangerBase {
  constructor (game) {
    super(game, "Sylvan Ranger", "Modern Masters 2017", "MM3");
  }
}

module.exports = SylvanRanger;
