"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ScrapperChampion extends UnimplementedCard {
  constructor (game) {
    super(game, "Scrapper Champion", "Aether Revolt", "AER");
  }
}

module.exports = ScrapperChampion;
