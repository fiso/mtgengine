"use strict";
const Constants = require ("../../../Constants");
const TrashforTreasureBase = require("../setC16/TrashforTreasure");

class TrashforTreasure extends TrashforTreasureBase {
  constructor (game) {
    super(game, "Trash for Treasure", "Mirrodin", "MRD");
  }
}

module.exports = TrashforTreasure;
