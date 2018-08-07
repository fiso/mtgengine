"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RagingBull extends UnimplementedCard {
  constructor (game) {
    super(game, "Raging Bull", "Legends", "LEG");
  }
}

module.exports = RagingBull;
