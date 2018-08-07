"use strict";
const Constants = require ("../../../Constants");
const SilklashSpiderBase = require("../setCMA/SilklashSpider");

class SilklashSpider extends SilklashSpiderBase {
  constructor (game) {
    super(game, "Silklash Spider", "Onslaught", "ONS");
  }
}

module.exports = SilklashSpider;
