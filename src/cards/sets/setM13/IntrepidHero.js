"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IntrepidHero extends UnimplementedCard {
  constructor (game) {
    super(game, "Intrepid Hero", "Magic 2013", "M13");
  }
}

module.exports = IntrepidHero;
