"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IncreasingDevotion extends UnimplementedCard {
  constructor(game) {
    super(game, "Increasing Devotion", "Dark Ascension", "DKA");
  }
}

module.exports = IncreasingDevotion;
