"use strict";
const Constants = require ("../../../Constants");
const AzoriusSignetBase = require("../setARC/AzoriusSignet");

class AzoriusSignet extends AzoriusSignetBase {
  constructor (game) {
    super(game, "Azorius Signet", "Dissension", "DIS");
  }
}

module.exports = AzoriusSignet;
