"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const QuicksilverAmuletBase = require("../setM12/QuicksilverAmulet.js");

class QuicksilverAmulet extends QuicksilverAmuletBase {
  constructor(game) {
    super(game, "Quicksilver Amulet", "Urza's Legacy", "ULG");
  }
}

module.exports = QuicksilverAmulet;
