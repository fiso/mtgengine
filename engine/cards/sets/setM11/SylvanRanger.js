"use strict";
const Constants = require ("../../../Constants");
const SylvanRangerBase = require("../setC14/SylvanRanger");

class SylvanRanger extends SylvanRangerBase {
  constructor(game) {
    super(game, "Sylvan Ranger", "Magic 2011", "M11");
  }
}

module.exports = SylvanRanger;
