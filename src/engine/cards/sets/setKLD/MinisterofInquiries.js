"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MinisterofInquiries extends UnimplementedCard {
  constructor (game) {
    super(game, "Minister of Inquiries", "Kaladesh", "KLD");
  }
}

module.exports = MinisterofInquiries;
