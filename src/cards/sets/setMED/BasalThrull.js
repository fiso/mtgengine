"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BasalThrull extends UnimplementedCard {
  constructor (game) {
    super(game, "Basal Thrull", "Masters Edition", "MED");
  }
}

module.exports = BasalThrull;
