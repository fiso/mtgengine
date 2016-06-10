"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RoyalHerbalist extends UnimplementedCard {
  constructor (game) {
    super(game, "Royal Herbalist", "Alliances", "ALL");
  }
}

module.exports = RoyalHerbalist;
