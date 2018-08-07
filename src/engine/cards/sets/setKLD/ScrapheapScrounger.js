"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ScrapheapScrounger extends UnimplementedCard {
  constructor (game) {
    super(game, "Scrapheap Scrounger", "Kaladesh", "KLD");
  }
}

module.exports = ScrapheapScrounger;
