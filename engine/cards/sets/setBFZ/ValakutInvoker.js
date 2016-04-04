"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ValakutInvoker extends Card {
  constructor(game) {
    super(game, "Valakut Invoker", "Battle for Zendikar", "BFZ");
  }
}

module.exports = ValakutInvoker;
