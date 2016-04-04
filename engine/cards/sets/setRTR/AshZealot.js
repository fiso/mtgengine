"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AshZealot extends UnimplementedCard {
  constructor(game) {
    super(game, "Ash Zealot", "Return to Ravnica", "RTR");
  }
}

module.exports = AshZealot;
