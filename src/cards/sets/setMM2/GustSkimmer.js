"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GustSkimmer extends UnimplementedCard {
  constructor (game) {
    super(game, "Gust-Skimmer", "Modern Masters 2015", "MM2");
  }
}

module.exports = GustSkimmer;
