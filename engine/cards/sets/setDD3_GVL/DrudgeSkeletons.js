"use strict";
const Constants = require ("../../../Constants");
const DrudgeSkeletonsBase = require("../set6ED/DrudgeSkeletons");

class DrudgeSkeletons extends DrudgeSkeletonsBase {
  constructor(game) {
    super(game, "Drudge Skeletons", "Duel Decks Anthology, Garruk vs. Liliana", "DD3_GVL");
  }
}

module.exports = DrudgeSkeletons;
