"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SealofDoom extends UnimplementedCard {
  constructor (game) {
    super(game, "Seal of Doom", "Modern Masters 2017", "MM3");
  }
}

module.exports = SealofDoom;
