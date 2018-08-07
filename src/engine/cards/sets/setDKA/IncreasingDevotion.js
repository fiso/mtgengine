"use strict";
const Constants = require ("../../../Constants");
const IncreasingDevotionBase = require("../setDDQ/IncreasingDevotion");

class IncreasingDevotion extends IncreasingDevotionBase {
  constructor (game) {
    super(game, "Increasing Devotion", "Dark Ascension", "DKA");
  }
}

module.exports = IncreasingDevotion;
