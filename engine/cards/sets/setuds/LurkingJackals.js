"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LurkingJackals extends Card {
  constructor(game) {
    super(game, "Lurking Jackals", "Urza's Destiny", "UDS");
  }
}

module.exports = LurkingJackals;
