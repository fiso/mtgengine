"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DuskmantleSeer extends UnimplementedCard {
  constructor (game) {
    super(game, "Duskmantle Seer", "Gatecrash", "GTC");
  }
}

module.exports = DuskmantleSeer;
