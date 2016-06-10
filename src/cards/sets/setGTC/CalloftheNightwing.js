"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CalloftheNightwing extends UnimplementedCard {
  constructor (game) {
    super(game, "Call of the Nightwing", "Gatecrash", "GTC");
  }
}

module.exports = CalloftheNightwing;
