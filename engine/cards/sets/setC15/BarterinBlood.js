"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BarterinBloodBase = require("../setAVR/BarterinBlood.js");

class BarterinBlood extends BarterinBloodBase {
  constructor(game) {
    super(game, "Barter in Blood", "Commander 2015", "C15");
  }
}

module.exports = BarterinBlood;
