"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UnravelingMummy extends UnimplementedCard {
  constructor (game) {
    super(game, "Unraveling Mummy", "Hour of Devastation", "HOU");
  }
}

module.exports = UnravelingMummy;
