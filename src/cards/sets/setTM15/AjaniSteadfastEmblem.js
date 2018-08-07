"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AjaniSteadfastEmblem extends UnimplementedCard {
  constructor (game) {
    super(game, "Ajani Steadfast Emblem", "Magic 2015 Tokens", "TM15");
  }
}

module.exports = AjaniSteadfastEmblem;
