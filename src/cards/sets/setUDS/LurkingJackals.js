"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LurkingJackals extends UnimplementedCard {
  constructor (game) {
    super(game, "Lurking Jackals", "Urza's Destiny", "UDS");
  }
}

module.exports = LurkingJackals;
