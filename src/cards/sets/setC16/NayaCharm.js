"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NayaCharm extends UnimplementedCard {
  constructor (game) {
    super(game, "Naya Charm", "Commander 2016", "C16");
  }
}

module.exports = NayaCharm;
