"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DefiantKhenra extends UnimplementedCard {
  constructor (game) {
    super(game, "Defiant Khenra", "Hour of Devastation", "HOU");
  }
}

module.exports = DefiantKhenra;
