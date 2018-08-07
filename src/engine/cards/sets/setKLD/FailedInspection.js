"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FailedInspection extends UnimplementedCard {
  constructor (game) {
    super(game, "Failed Inspection", "Kaladesh", "KLD");
  }
}

module.exports = FailedInspection;
