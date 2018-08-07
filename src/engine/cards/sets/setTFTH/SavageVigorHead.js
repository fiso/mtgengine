"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SavageVigorHead extends UnimplementedCard {
  constructor (game) {
    super(game, "Savage Vigor Head", "Face the Hydra", "TFTH");
  }
}

module.exports = SavageVigorHead;
