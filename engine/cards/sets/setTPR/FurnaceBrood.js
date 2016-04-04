"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FurnaceBroodBase = require("../setEXO/FurnaceBrood.js");

class FurnaceBrood extends FurnaceBroodBase {
  constructor(game) {
    super(game, "Furnace Brood", "Tempest Remastered", "TPR");
  }
}

module.exports = FurnaceBrood;
