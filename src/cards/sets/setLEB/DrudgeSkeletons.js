"use strict";
const Constants = require ("../../../Constants");
const DrudgeSkeletonsBase = require("../setGVL/DrudgeSkeletons");

class DrudgeSkeletons extends DrudgeSkeletonsBase {
  constructor (game) {
    super(game, "Drudge Skeletons", "Limited Edition Beta", "LEB");
  }
}

module.exports = DrudgeSkeletons;
