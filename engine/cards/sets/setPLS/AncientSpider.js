"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AncientSpider extends Card {
  constructor(game) {
    super(game, "Ancient Spider", "Planeshift", "PLS");
  }
}

module.exports = AncientSpider;
