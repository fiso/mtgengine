"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KruphixsInsight extends UnimplementedCard {
  constructor(game) {
    super(game, "Kruphix's Insight", "Journey into Nyx", "JOU");
  }
}

module.exports = KruphixsInsight;
