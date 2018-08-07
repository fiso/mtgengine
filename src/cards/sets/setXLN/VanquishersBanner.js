"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VanquishersBanner extends UnimplementedCard {
  constructor (game) {
    super(game, "Vanquisher's Banner", "Ixalan", "XLN");
  }
}

module.exports = VanquishersBanner;
