"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GravecrawlerBase = require("../setDKA/Gravecrawler.js");

class Gravecrawler extends GravecrawlerBase {
  constructor(game) {
    super(game, "Gravecrawler", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = Gravecrawler;
