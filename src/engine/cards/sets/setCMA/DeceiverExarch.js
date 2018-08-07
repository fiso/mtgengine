"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DeceiverExarch extends UnimplementedCard {
  constructor (game) {
    super(game, "Deceiver Exarch", "Commander Anthology", "CMA");
  }
}

module.exports = DeceiverExarch;
