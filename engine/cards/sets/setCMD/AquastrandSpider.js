"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AquastrandSpiderBase = require("../setDIS/AquastrandSpider.js");

class AquastrandSpider extends AquastrandSpiderBase {
  constructor(game) {
    super(game, "Aquastrand Spider", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = AquastrandSpider;
