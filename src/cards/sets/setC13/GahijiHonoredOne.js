"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GahijiHonoredOne extends UnimplementedCard {
  constructor (game) {
    super(game, "Gahiji, Honored One", "Commander 2013 Edition", "C13");
  }
}

module.exports = GahijiHonoredOne;
