"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SmokespewInvoker extends UnimplementedCard {
  constructor(game) {
    super(game, "Smokespew Invoker", "Legions", "LGN");
  }
}

module.exports = SmokespewInvoker;
