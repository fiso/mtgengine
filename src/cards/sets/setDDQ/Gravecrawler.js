"use strict";
const Constants = require ("../../../Constants");
const GravecrawlerBase = require("../setDKA/Gravecrawler");

class Gravecrawler extends GravecrawlerBase {
  constructor (game) {
    super(game, "Gravecrawler", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = Gravecrawler;
