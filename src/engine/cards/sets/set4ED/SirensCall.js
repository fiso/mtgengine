"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SirensCall extends UnimplementedCard {
  constructor (game) {
    super(game, "Siren's Call", "Fourth Edition", "4ED");
  }
}

module.exports = SirensCall;
