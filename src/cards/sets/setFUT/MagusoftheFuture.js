"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MagusoftheFuture extends UnimplementedCard {
  constructor (game) {
    super(game, "Magus of the Future", "Future Sight", "FUT");
  }
}

module.exports = MagusoftheFuture;
