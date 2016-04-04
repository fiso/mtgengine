"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RenewingTouch extends Card {
  constructor(game) {
    super(game, "Renewing Touch", "Portal Second Age", "PO2");
  }
}

module.exports = RenewingTouch;
