"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShriekingTitanHead extends UnimplementedCard {
  constructor (game) {
    super(game, "Shrieking Titan Head", "Face the Hydra", "TFTH");
  }
}

module.exports = ShriekingTitanHead;
