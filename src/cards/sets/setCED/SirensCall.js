"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SirensCall extends UnimplementedCard {
  constructor (game) {
    super(game, "Siren's Call", "Collector's Edition", "CED");
  }
}

module.exports = SirensCall;
