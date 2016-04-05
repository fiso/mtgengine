"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GruulScrapper extends UnimplementedCard {
  constructor(game) {
    super(game, "Gruul Scrapper", "Guildpact", "GPT");
  }
}

module.exports = GruulScrapper;
