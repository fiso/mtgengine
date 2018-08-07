"use strict";
const Constants = require ("../../../Constants");
const ScrapheapScroungerBase = require("../setKLD/ScrapheapScrounger");

class ScrapheapScrounger extends ScrapheapScroungerBase {
  constructor (game) {
    super(game, "Scrapheap Scrounger", "Kaladesh Promos", "PKLD");
  }
}

module.exports = ScrapheapScrounger;
