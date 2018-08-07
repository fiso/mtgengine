"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PurgetheProfane extends UnimplementedCard {
  constructor (game) {
    super(game, "Purge the Profane", "Gatecrash", "GTC");
  }
}

module.exports = PurgetheProfane;
