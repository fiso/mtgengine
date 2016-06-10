"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FuryoftheHorde extends UnimplementedCard {
  constructor (game) {
    super(game, "Fury of the Horde", "Coldsnap", "CSP");
  }
}

module.exports = FuryoftheHorde;
