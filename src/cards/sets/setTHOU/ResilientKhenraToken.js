"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ResilientKhenraToken extends UnimplementedCard {
  constructor (game) {
    super(game, "Resilient Khenra Token", "Hour of Devastation Tokens", "THOU");
  }
}

module.exports = ResilientKhenraToken;
