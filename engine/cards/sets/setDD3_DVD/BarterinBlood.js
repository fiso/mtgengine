"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BarterinBloodBase = require("../setAVR/BarterinBlood.js");

class BarterinBlood extends BarterinBloodBase {
  constructor(game) {
    super(game, "Barter in Blood", "Duel Decks Anthology, Divine vs. Demonic", "DD3_DVD");
  }
}

module.exports = BarterinBlood;
