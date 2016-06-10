"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Threaten extends UnimplementedCard {
  constructor (game) {
    super(game, "Threaten", "Ninth Edition", "9ED");
  }
}

module.exports = Threaten;
