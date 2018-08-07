"use strict";
const Constants = require ("../../../Constants");
const AzoriusSignetBase = require("../setC18/AzoriusSignet");

class AzoriusSignet extends AzoriusSignetBase {
  constructor (game) {
    super(game, "Azorius Signet", "Modern Masters 2017", "MM3");
  }
}

module.exports = AzoriusSignet;
