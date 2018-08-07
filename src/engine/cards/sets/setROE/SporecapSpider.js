"use strict";
const Constants = require ("../../../Constants");
const SporecapSpiderBase = require("../setCNS/SporecapSpider");

class SporecapSpider extends SporecapSpiderBase {
  constructor (game) {
    super(game, "Sporecap Spider", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = SporecapSpider;
