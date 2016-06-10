"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EssenceDrain extends UnimplementedCard {
  constructor (game) {
    super(game, "Essence Drain", "Darksteel", "DST");
  }
}

module.exports = EssenceDrain;
