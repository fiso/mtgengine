"use strict";
const Constants = require ("../../../Constants");
const RecycleBase = require("../setTMP/Recycle");

class Recycle extends RecycleBase {
  constructor (game) {
    super(game, "Recycle", "Tempest Remastered", "TPR");
  }
}

module.exports = Recycle;
