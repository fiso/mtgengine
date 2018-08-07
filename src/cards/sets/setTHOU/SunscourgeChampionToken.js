"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SunscourgeChampionToken extends UnimplementedCard {
  constructor (game) {
    super(game, "Sunscourge Champion Token", "Hour of Devastation Tokens", "THOU");
  }
}

module.exports = SunscourgeChampionToken;
