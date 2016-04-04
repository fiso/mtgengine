"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DeathWatch extends UnimplementedCard {
  constructor(game) {
    super(game, "Death Watch", "Visions", "VIS");
  }
}

module.exports = DeathWatch;
