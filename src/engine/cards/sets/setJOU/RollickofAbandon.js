"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RollickofAbandon extends UnimplementedCard {
  constructor (game) {
    super(game, "Rollick of Abandon", "Journey into Nyx", "JOU");
  }
}

module.exports = RollickofAbandon;
