"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CryptoftheEternals extends UnimplementedCard {
  constructor (game) {
    super(game, "Crypt of the Eternals", "Hour of Devastation", "HOU");
  }
}

module.exports = CryptoftheEternals;
