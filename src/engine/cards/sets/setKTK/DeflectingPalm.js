"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DeflectingPalm extends UnimplementedCard {
  constructor (game) {
    super(game, "Deflecting Palm", "Khans of Tarkir", "KTK");
  }
}

module.exports = DeflectingPalm;
