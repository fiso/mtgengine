"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PietyCharm extends UnimplementedCard {
  constructor (game) {
    super(game, "Piety Charm", "Onslaught", "ONS");
  }
}

module.exports = PietyCharm;
