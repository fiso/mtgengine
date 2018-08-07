"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EarthshakerKhenraToken extends UnimplementedCard {
  constructor (game) {
    super(game, "Earthshaker Khenra Token", "Hour of Devastation Tokens", "THOU");
  }
}

module.exports = EarthshakerKhenraToken;
