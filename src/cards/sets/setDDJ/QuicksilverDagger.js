"use strict";
const Constants = require ("../../../Constants");
const QuicksilverDaggerBase = require("../setAPC/QuicksilverDagger");

class QuicksilverDagger extends QuicksilverDaggerBase {
  constructor(game) {
    super(game, "Quicksilver Dagger", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = QuicksilverDagger;
