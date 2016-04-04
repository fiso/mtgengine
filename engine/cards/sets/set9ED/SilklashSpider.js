"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SilklashSpiderBase = require("../setC13/SilklashSpider.js");

class SilklashSpider extends SilklashSpiderBase {
  constructor(game) {
    super(game, "Silklash Spider", "Ninth Edition", "9ED");
  }
}

module.exports = SilklashSpider;
