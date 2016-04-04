"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RootSpider extends Card {
  constructor(game) {
    super(game, "Root Spider", "Homelands", "HML");
  }
}

module.exports = RootSpider;
