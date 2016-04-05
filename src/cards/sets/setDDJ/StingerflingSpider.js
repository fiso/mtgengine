"use strict";
const Constants = require ("../../../Constants");
const StingerflingSpiderBase = require("../setC15/StingerflingSpider");

class StingerflingSpider extends StingerflingSpiderBase {
  constructor(game) {
    super(game, "Stingerfling Spider", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = StingerflingSpider;
