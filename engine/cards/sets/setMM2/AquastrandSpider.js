"use strict";
const Constants = require ("../../../Constants");
const AquastrandSpiderBase = require("../setDIS/AquastrandSpider");

class AquastrandSpider extends AquastrandSpiderBase {
  constructor(game) {
    super(game, "Aquastrand Spider", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = AquastrandSpider;
