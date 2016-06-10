"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StarCompass extends UnimplementedCard {
  constructor (game) {
    super(game, "Star Compass", "Eighth Edition", "8ED");
  }
}

module.exports = StarCompass;
