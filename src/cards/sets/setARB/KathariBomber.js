"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KathariBomber extends UnimplementedCard {
  constructor (game) {
    super(game, "Kathari Bomber", "Alara Reborn", "ARB");
  }
}

module.exports = KathariBomber;
