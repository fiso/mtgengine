"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BalefulStare extends UnimplementedCard {
  constructor(game) {
    super(game, "Baleful Stare", "Ninth Edition", "9ED");
  }
}

module.exports = BalefulStare;
