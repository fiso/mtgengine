"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Immolation extends UnimplementedCard {
  constructor (game) {
    super(game, "Immolation", "Fourth Edition", "4ED");
  }
}

module.exports = Immolation;
