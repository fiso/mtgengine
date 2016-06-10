"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FrostwindInvoker extends UnimplementedCard {
  constructor (game) {
    super(game, "Frostwind Invoker", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = FrostwindInvoker;
