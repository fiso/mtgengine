"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThingintheIce extends UnimplementedCard {
  constructor (game) {
    super(game, "Thing in the Ice", "Shadows over Innistrad", "SOI");
  }
}

module.exports = ThingintheIce;
