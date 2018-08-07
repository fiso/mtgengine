"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ResilientKhenra extends UnimplementedCard {
  constructor (game) {
    super(game, "Resilient Khenra", "Hour of Devastation", "HOU");
  }
}

module.exports = ResilientKhenra;
