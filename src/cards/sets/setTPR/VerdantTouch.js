"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VerdantTouch extends UnimplementedCard {
  constructor (game) {
    super(game, "Verdant Touch", "Tempest Remastered", "TPR");
  }
}

module.exports = VerdantTouch;
