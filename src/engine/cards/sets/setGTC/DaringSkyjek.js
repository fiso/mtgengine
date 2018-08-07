"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DaringSkyjek extends UnimplementedCard {
  constructor (game) {
    super(game, "Daring Skyjek", "Gatecrash", "GTC");
  }
}

module.exports = DaringSkyjek;
