"use strict";
const Constants = require ("../../../Constants");
const DrudgeSkeletonsBase = require("../setGVL/DrudgeSkeletons");

class DrudgeSkeletons extends DrudgeSkeletonsBase {
  constructor (game) {
    super(game, "Drudge Skeletons", "Ninth Edition", "9ED");
  }
}

module.exports = DrudgeSkeletons;
