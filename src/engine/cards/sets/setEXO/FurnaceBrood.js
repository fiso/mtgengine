"use strict";
const Constants = require ("../../../Constants");
const FurnaceBroodBase = require("../setTPR/FurnaceBrood");

class FurnaceBrood extends FurnaceBroodBase {
  constructor (game) {
    super(game, "Furnace Brood", "Exodus", "EXO");
  }
}

module.exports = FurnaceBrood;
