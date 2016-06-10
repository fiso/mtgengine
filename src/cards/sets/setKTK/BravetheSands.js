"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BravetheSands extends UnimplementedCard {
  constructor (game) {
    super(game, "Brave the Sands", "Khans of Tarkir", "KTK");
  }
}

module.exports = BravetheSands;
