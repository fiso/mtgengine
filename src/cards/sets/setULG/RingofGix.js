"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RingofGix extends UnimplementedCard {
  constructor(game) {
    super(game, "Ring of Gix", "Urza's Legacy", "ULG");
  }
}

module.exports = RingofGix;
