"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Chastise extends UnimplementedCard {
  constructor(game) {
    super(game, "Chastise", "Eighth Edition", "8ED");
  }
}

module.exports = Chastise;
