"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SporecapSpiderBase = require("../setCNS/SporecapSpider.js");

class SporecapSpider extends SporecapSpiderBase {
  constructor(game) {
    super(game, "Sporecap Spider", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = SporecapSpider;
