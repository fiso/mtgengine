"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GoldmeadowLookout extends Card {
  constructor(game) {
    super(game, "Goldmeadow Lookout", "Future Sight", "FUT");
  }
}

module.exports = GoldmeadowLookout;
