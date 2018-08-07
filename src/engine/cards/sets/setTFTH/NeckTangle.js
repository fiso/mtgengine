"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NeckTangle extends UnimplementedCard {
  constructor (game) {
    super(game, "Neck Tangle", "Face the Hydra", "TFTH");
  }
}

module.exports = NeckTangle;
