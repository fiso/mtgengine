"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GruulScrapper extends Card {
  constructor(game) {
    super(game, "Gruul Scrapper", "Guildpact", "GPT");
  }
}

module.exports = GruulScrapper;
