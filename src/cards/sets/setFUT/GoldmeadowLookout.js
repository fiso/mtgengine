"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoldmeadowLookout extends UnimplementedCard {
  constructor (game) {
    super(game, "Goldmeadow Lookout", "Future Sight", "FUT");
  }
}

module.exports = GoldmeadowLookout;
