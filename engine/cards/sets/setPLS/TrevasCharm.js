"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TrevasCharmBase = require("../setDDE/TrevasCharm.js");

class TrevasCharm extends TrevasCharmBase {
  constructor(game) {
    super(game, "Treva's Charm", "Planeshift", "PLS");
  }
}

module.exports = TrevasCharm;
