"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CrawGiant extends UnimplementedCard {
  constructor (game) {
    super(game, "Craw Giant", "Chronicles", "CHR");
  }
}

module.exports = CrawGiant;
