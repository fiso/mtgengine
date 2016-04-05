"use strict";
const Constants = require ("../../../Constants");
const EliteArchersBase = require("../set8ED/EliteArchers");

class EliteArchers extends EliteArchersBase {
  constructor(game) {
    super(game, "Elite Archers", "Seventh Edition", "7ED");
  }
}

module.exports = EliteArchers;
