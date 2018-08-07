"use strict";
const Constants = require ("../../../Constants");
const QuicksilverAmuletBase = require("../setE02/QuicksilverAmulet");

class QuicksilverAmulet extends QuicksilverAmuletBase {
  constructor (game) {
    super(game, "Quicksilver Amulet", "Magic 2012", "M12");
  }
}

module.exports = QuicksilverAmulet;
