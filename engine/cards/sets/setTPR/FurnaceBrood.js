"use strict";
const Constants = require ("../../../Constants");
const FurnaceBroodBase = require("../setEXO/FurnaceBrood");

class FurnaceBrood extends FurnaceBroodBase {
  constructor(game) {
    super(game, "Furnace Brood", "Tempest Remastered", "TPR");
  }
}

module.exports = FurnaceBrood;
