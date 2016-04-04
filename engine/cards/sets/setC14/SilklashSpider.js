"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SilklashSpiderBase = require("../setC13/SilklashSpider.js");

class SilklashSpider extends SilklashSpiderBase {
  constructor(game) {
    super(game, "Silklash Spider", "Commander 2014", "C14");
  }
}

module.exports = SilklashSpider;
