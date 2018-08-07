"use strict";
const Constants = require ("../../../Constants");
const QuicksilverDaggerBase = require("../setA25/QuicksilverDagger");

class QuicksilverDagger extends QuicksilverDaggerBase {
  constructor (game) {
    super(game, "Quicksilver Dagger", "Apocalypse", "APC");
  }
}

module.exports = QuicksilverDagger;
