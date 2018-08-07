"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RuinRat extends UnimplementedCard {
  constructor (game) {
    super(game, "Ruin Rat", "Hour of Devastation", "HOU");
  }
}

module.exports = RuinRat;
