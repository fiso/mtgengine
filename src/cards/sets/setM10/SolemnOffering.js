"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SolemnOffering extends UnimplementedCard {
  constructor (game) {
    super(game, "Solemn Offering", "Magic 2010", "M10");
  }
}

module.exports = SolemnOffering;
