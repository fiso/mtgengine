"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EmeriaShepherd extends UnimplementedCard {
  constructor (game) {
    super(game, "Emeria Shepherd", "Battle for Zendikar", "BFZ");
  }
}

module.exports = EmeriaShepherd;
