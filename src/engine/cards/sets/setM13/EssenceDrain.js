"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EssenceDrain extends UnimplementedCard {
  constructor (game) {
    super(game, "Essence Drain", "Magic 2013", "M13");
  }
}

module.exports = EssenceDrain;
