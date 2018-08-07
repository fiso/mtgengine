"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ValakutInvoker extends UnimplementedCard {
  constructor (game) {
    super(game, "Valakut Invoker", "Battle for Zendikar", "BFZ");
  }
}

module.exports = ValakutInvoker;
