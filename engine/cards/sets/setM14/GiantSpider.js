"use strict";
const Constants = require ("../../../Constants");
const GiantSpiderBase = require("../setATH/GiantSpider");

class GiantSpider extends GiantSpiderBase {
  constructor(game) {
    super(game, "Giant Spider", "Magic 2014 Core Set", "M14");
  }
}

module.exports = GiantSpider;
