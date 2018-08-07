"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BravetheSands extends UnimplementedCard {
  constructor (game) {
    super(game, "Brave the Sands", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = BravetheSands;
