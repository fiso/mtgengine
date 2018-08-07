"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Horse extends UnimplementedCard {
  constructor (game) {
    super(game, "Horse", "Hour of Devastation Tokens", "THOU");
  }
}

module.exports = Horse;
