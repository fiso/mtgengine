"use strict";
const Constants = require ("../../../Constants");
const AzoriusChanceryBase = require("../setC18/AzoriusChancery");

class AzoriusChancery extends AzoriusChanceryBase {
  constructor (game) {
    super(game, "Azorius Chancery", "Commander Anthology", "CMA");
  }
}

module.exports = AzoriusChancery;
