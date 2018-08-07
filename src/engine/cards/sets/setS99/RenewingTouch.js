"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RenewingTouch extends UnimplementedCard {
  constructor (game) {
    super(game, "Renewing Touch", "Starter 1999", "S99");
  }
}

module.exports = RenewingTouch;
