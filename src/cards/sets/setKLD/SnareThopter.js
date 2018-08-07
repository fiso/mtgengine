"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SnareThopter extends UnimplementedCard {
  constructor (game) {
    super(game, "Snare Thopter", "Kaladesh", "KLD");
  }
}

module.exports = SnareThopter;
