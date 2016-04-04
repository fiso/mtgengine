"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KjeldoranPrideBase = require("../setALL/KjeldoranPride.js");

class KjeldoranPride extends KjeldoranPrideBase {
  constructor(game) {
    super(game, "Kjeldoran Pride", "Coldsnap Theme Decks", "CST");
  }
}

module.exports = KjeldoranPride;
