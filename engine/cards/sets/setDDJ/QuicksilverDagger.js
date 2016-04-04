"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const QuicksilverDaggerBase = require("../setAPC/QuicksilverDagger.js");

class QuicksilverDagger extends QuicksilverDaggerBase {
  constructor(game) {
    super(game, "Quicksilver Dagger", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = QuicksilverDagger;
