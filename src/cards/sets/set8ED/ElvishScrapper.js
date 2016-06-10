"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ElvishScrapper extends UnimplementedCard {
  constructor (game) {
    super(game, "Elvish Scrapper", "Eighth Edition", "8ED");
  }
}

module.exports = ElvishScrapper;
