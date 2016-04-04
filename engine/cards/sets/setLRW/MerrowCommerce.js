"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MerrowCommerce extends Card {
  constructor(game) {
    super(game, "Merrow Commerce", "Lorwyn", "LRW");
  }
}

module.exports = MerrowCommerce;
