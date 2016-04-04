"use strict";
const Constants = require ("../../../Constants");
const SilklashSpiderBase = require("../setC13/SilklashSpider");

class SilklashSpider extends SilklashSpiderBase {
  constructor(game) {
    super(game, "Silklash Spider", "Magic 2013", "M13");
  }
}

module.exports = SilklashSpider;
