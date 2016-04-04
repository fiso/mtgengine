"use strict";
const Constants = require ("../../../Constants");
const AzoriusChanceryBase = require("../setC13/AzoriusChancery");

class AzoriusChancery extends AzoriusChanceryBase {
  constructor(game) {
    super(game, "Azorius Chancery", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = AzoriusChancery;
