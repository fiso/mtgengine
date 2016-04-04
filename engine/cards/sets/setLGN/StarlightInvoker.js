"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StarlightInvoker extends UnimplementedCard {
  constructor(game) {
    super(game, "Starlight Invoker", "Legions", "LGN");
  }
}

module.exports = StarlightInvoker;
