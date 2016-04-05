"use strict";
const Constants = require ("../../../Constants");
const AquastrandSpiderBase = require("../setDIS/AquastrandSpider");

class AquastrandSpider extends AquastrandSpiderBase {
  constructor(game) {
    super(game, "Aquastrand Spider", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = AquastrandSpider;
