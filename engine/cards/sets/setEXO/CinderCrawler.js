"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CinderCrawler extends Card {
  constructor(game) {
    super(game, "Cinder Crawler", "Exodus", "EXO");
  }
}

module.exports = CinderCrawler;
