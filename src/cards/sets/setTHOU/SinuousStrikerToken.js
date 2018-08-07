"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SinuousStrikerToken extends UnimplementedCard {
  constructor (game) {
    super(game, "Sinuous Striker Token", "Hour of Devastation Tokens", "THOU");
  }
}

module.exports = SinuousStrikerToken;
