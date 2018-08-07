"use strict";
const Constants = require ("../../../Constants");
const GravecrawlerBase = require("../setDDQ/Gravecrawler");

class Gravecrawler extends GravecrawlerBase {
  constructor (game) {
    super(game, "Gravecrawler", "Dark Ascension Promos", "PDKA");
  }
}

module.exports = Gravecrawler;
