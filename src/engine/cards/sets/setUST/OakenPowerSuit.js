"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OakenPowerSuit extends UnimplementedCard {
  constructor (game) {
    super(game, "Oaken Power Suit", "Unstable", "UST");
  }
}

module.exports = OakenPowerSuit;
