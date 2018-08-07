"use strict";
const Constants = require ("../../../Constants");
const KjeldoranPrideBase = require("../setCST/KjeldoranPride");

class KjeldoranPride extends KjeldoranPrideBase {
  constructor (game) {
    super(game, "Kjeldoran Pride", "Alliances", "ALL");
  }
}

module.exports = KjeldoranPride;
