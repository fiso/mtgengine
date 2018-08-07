"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FlamewaveInvoker extends UnimplementedCard {
  constructor (game) {
    super(game, "Flamewave Invoker", "Battlebond", "BBD");
  }
}

module.exports = FlamewaveInvoker;
