"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RenewingTouch extends UnimplementedCard {
  constructor(game) {
    super(game, "Renewing Touch", "Portal Second Age", "PO2");
  }
}

module.exports = RenewingTouch;
