"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CalloftheHerd extends UnimplementedCard {
  constructor (game) {
    super(game, "Call of the Herd", "Grand Prix", "pGPX");
  }
}

module.exports = CalloftheHerd;
