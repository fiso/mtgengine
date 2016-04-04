"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FrostwebSpider extends Card {
  constructor(game) {
    super(game, "Frostweb Spider", "Coldsnap", "CSP");
  }
}

module.exports = FrostwebSpider;
