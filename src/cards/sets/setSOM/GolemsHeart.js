"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GolemsHeart extends UnimplementedCard {
  constructor (game) {
    super(game, "Golem's Heart", "Scars of Mirrodin", "SOM");
  }
}

module.exports = GolemsHeart;
