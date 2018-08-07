"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DreadCharge extends UnimplementedCard {
  constructor (game) {
    super(game, "Dread Charge", "Portal", "POR");
  }
}

module.exports = DreadCharge;
