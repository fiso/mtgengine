"use strict";
const Constants = require ("../../../Constants");
const AquastrandSpiderBase = require("../setMM2/AquastrandSpider");

class AquastrandSpider extends AquastrandSpiderBase {
  constructor (game) {
    super(game, "Aquastrand Spider", "Dissension", "DIS");
  }
}

module.exports = AquastrandSpider;
