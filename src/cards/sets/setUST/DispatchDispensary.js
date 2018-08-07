"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DispatchDispensary extends UnimplementedCard {
  constructor (game) {
    super(game, "Dispatch Dispensary", "Unstable", "UST");
  }
}

module.exports = DispatchDispensary;
