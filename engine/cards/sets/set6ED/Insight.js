"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Insight extends UnimplementedCard {
  constructor(game) {
    super(game, "Insight", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Insight;
