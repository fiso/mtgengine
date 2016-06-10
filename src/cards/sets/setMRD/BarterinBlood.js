"use strict";
const Constants = require ("../../../Constants");
const BarterinBloodBase = require("../setAVR/BarterinBlood");

class BarterinBlood extends BarterinBloodBase {
  constructor (game) {
    super(game, "Barter in Blood", "Mirrodin", "MRD");
  }
}

module.exports = BarterinBlood;
