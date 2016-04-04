"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RecycleBase = require("../setTMP/Recycle.js");

class Recycle extends RecycleBase {
  constructor(game) {
    super(game, "Recycle", "Tempest Remastered", "TPR");
  }
}

module.exports = Recycle;
