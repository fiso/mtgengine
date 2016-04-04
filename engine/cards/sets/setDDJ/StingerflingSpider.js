"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const StingerflingSpiderBase = require("../setC15/StingerflingSpider.js");

class StingerflingSpider extends StingerflingSpiderBase {
  constructor(game) {
    super(game, "Stingerfling Spider", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = StingerflingSpider;
