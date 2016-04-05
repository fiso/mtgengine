"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LavafumeInvoker extends UnimplementedCard {
  constructor(game) {
    super(game, "Lavafume Invoker", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = LavafumeInvoker;
