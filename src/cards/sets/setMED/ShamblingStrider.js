"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShamblingStrider extends UnimplementedCard {
  constructor (game) {
    super(game, "Shambling Strider", "Masters Edition", "MED");
  }
}

module.exports = ShamblingStrider;
