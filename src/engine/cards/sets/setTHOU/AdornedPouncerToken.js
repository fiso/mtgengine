"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AdornedPouncerToken extends UnimplementedCard {
  constructor (game) {
    super(game, "Adorned Pouncer Token", "Hour of Devastation Tokens", "THOU");
  }
}

module.exports = AdornedPouncerToken;
