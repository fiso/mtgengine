"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IntrepidHero extends UnimplementedCard {
  constructor (game) {
    super(game, "Intrepid Hero", "Eighth Edition", "8ED");
  }
}

module.exports = IntrepidHero;
