"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RiteofUndoing extends UnimplementedCard {
  constructor(game) {
    super(game, "Rite of Undoing", "Fate Reforged", "FRF");
  }
}

module.exports = RiteofUndoing;
