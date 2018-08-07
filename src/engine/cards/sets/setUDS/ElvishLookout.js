"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ElvishLookout extends UnimplementedCard {
  constructor (game) {
    super(game, "Elvish Lookout", "Urza's Destiny", "UDS");
  }
}

module.exports = ElvishLookout;
