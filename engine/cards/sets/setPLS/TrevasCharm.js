"use strict";
const Constants = require ("../../../Constants");
const TrevasCharmBase = require("../setDDE/TrevasCharm");

class TrevasCharm extends TrevasCharmBase {
  constructor(game) {
    super(game, "Treva's Charm", "Planeshift", "PLS");
  }
}

module.exports = TrevasCharm;
