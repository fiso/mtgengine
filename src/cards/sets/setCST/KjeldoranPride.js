"use strict";
const Constants = require ("../../../Constants");
const KjeldoranPrideBase = require("../setALL/KjeldoranPride");

class KjeldoranPride extends KjeldoranPrideBase {
  constructor (game) {
    super(game, "Kjeldoran Pride", "Coldsnap Theme Decks", "CST");
  }
}

module.exports = KjeldoranPride;
