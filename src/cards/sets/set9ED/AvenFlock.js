"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AvenFlock extends UnimplementedCard {
  constructor (game) {
    super(game, "Aven Flock", "Ninth Edition", "9ED");
  }
}

module.exports = AvenFlock;
