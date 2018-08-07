"use strict";
const Constants = require ("../../../Constants");
const GravecrawlerBase = require("../setDDQ/Gravecrawler");

class Gravecrawler extends GravecrawlerBase {
  constructor (game) {
    super(game, "Gravecrawler", "Magic Online Promos", "PRM");
  }
}

module.exports = Gravecrawler;
