"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HerbalPoultice extends Card {
  constructor(game) {
    super(game, "Herbal Poultice", "Lorwyn", "LRW");
  }
}

module.exports = HerbalPoultice;
