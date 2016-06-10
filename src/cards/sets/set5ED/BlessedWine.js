"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BlessedWine extends UnimplementedCard {
  constructor (game) {
    super(game, "Blessed Wine", "Fifth Edition", "5ED");
  }
}

module.exports = BlessedWine;
