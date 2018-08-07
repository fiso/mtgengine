"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KhenraScrapper extends UnimplementedCard {
  constructor (game) {
    super(game, "Khenra Scrapper", "Hour of Devastation", "HOU");
  }
}

module.exports = KhenraScrapper;
