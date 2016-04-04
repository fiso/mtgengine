"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DuctCrawler extends Card {
  constructor(game) {
    super(game, "Duct Crawler", "Stronghold", "STH");
  }
}

module.exports = DuctCrawler;
