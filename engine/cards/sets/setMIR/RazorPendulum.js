"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RazorPendulum extends UnimplementedCard {
  constructor(game) {
    super(game, "Razor Pendulum", "Mirage", "MIR");
  }
}

module.exports = RazorPendulum;
