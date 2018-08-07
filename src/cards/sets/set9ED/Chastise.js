"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Chastise extends UnimplementedCard {
  constructor (game) {
    super(game, "Chastise", "Ninth Edition", "9ED");
  }
}

module.exports = Chastise;
