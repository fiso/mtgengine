"use strict";
const Constants = require ("../../../Constants");
const SilklashSpiderBase = require("../setCMA/SilklashSpider");

class SilklashSpider extends SilklashSpiderBase {
  constructor (game) {
    super(game, "Silklash Spider", "Commander 2014", "C14");
  }
}

module.exports = SilklashSpider;
