"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BantCharm extends UnimplementedCard {
  constructor (game) {
    super(game, "Bant Charm", "Commander 2018", "C18");
  }
}

module.exports = BantCharm;
