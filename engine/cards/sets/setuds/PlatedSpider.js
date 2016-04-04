"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PlatedSpiderBase = require("../setBTD/PlatedSpider.js");

class PlatedSpider extends PlatedSpiderBase {
  constructor(game) {
    super(game, "Plated Spider", "Urza's Destiny", "UDS");
  }
}

module.exports = PlatedSpider;
