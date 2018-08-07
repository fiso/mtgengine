"use strict";
const Constants = require ("../../../Constants");
const AzoriusSignetBase = require("../setC18/AzoriusSignet");

class AzoriusSignet extends AzoriusSignetBase {
  constructor (game) {
    super(game, "Azorius Signet", "Magic Online Promos", "PRM");
  }
}

module.exports = AzoriusSignet;
