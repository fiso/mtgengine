"use strict";
const Constants = require ("../../../Constants");
const PlatedSpiderBase = require("../setBTD/PlatedSpider");

class PlatedSpider extends PlatedSpiderBase {
  constructor(game) {
    super(game, "Plated Spider", "Urza's Destiny", "UDS");
  }
}

module.exports = PlatedSpider;
