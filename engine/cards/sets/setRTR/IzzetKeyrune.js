"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IzzetKeyrune extends UnimplementedCard {
  constructor(game) {
    super(game, "Izzet Keyrune", "Return to Ravnica", "RTR");
  }
}

module.exports = IzzetKeyrune;
