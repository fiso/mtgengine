"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NaturesPanoply extends UnimplementedCard {
  constructor (game) {
    super(game, "Nature's Panoply", "Journey into Nyx", "JOU");
  }
}

module.exports = NaturesPanoply;
