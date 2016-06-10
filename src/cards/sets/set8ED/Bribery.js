"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Bribery extends UnimplementedCard {
  constructor (game) {
    super(game, "Bribery", "Eighth Edition", "8ED");
  }
}

module.exports = Bribery;
