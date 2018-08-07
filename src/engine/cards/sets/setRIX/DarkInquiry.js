"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DarkInquiry extends UnimplementedCard {
  constructor (game) {
    super(game, "Dark Inquiry", "Rivals of Ixalan", "RIX");
  }
}

module.exports = DarkInquiry;
