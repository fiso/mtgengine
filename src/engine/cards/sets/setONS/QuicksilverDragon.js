"use strict";
const Constants = require ("../../../Constants");
const QuicksilverDragonBase = require("../setJVC/QuicksilverDragon");

class QuicksilverDragon extends QuicksilverDragonBase {
  constructor (game) {
    super(game, "Quicksilver Dragon", "Onslaught", "ONS");
  }
}

module.exports = QuicksilverDragon;
