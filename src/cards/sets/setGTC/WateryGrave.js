"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WateryGrave extends UnimplementedCard {
  constructor (game) {
    super(game, "Watery Grave", "Gatecrash", "GTC");
  }
}

module.exports = WateryGrave;
