"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Refocus extends UnimplementedCard {
  constructor(game) {
    super(game, "Refocus", "Fate Reforged", "FRF");
  }
}

module.exports = Refocus;
