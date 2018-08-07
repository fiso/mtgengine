"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BurningInquiry extends UnimplementedCard {
  constructor (game) {
    super(game, "Burning Inquiry", "Magic 2010", "M10");
  }
}

module.exports = BurningInquiry;
