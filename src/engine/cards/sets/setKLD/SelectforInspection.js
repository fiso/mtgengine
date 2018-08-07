"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SelectforInspection extends UnimplementedCard {
  constructor (game) {
    super(game, "Select for Inspection", "Kaladesh", "KLD");
  }
}

module.exports = SelectforInspection;
