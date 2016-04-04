"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HiddenSpider extends Card {
  constructor(game) {
    super(game, "Hidden Spider", "Urza's Saga", "USG");
  }
}

module.exports = HiddenSpider;
