"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GiftofGranite extends UnimplementedCard {
  constructor (game) {
    super(game, "Gift of Granite", "Future Sight", "FUT");
  }
}

module.exports = GiftofGranite;
