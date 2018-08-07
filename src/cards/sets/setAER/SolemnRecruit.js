"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SolemnRecruit extends UnimplementedCard {
  constructor (game) {
    super(game, "Solemn Recruit", "Aether Revolt", "AER");
  }
}

module.exports = SolemnRecruit;
