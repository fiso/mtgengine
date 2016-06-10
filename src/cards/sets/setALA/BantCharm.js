"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BantCharm extends UnimplementedCard {
  constructor (game) {
    super(game, "Bant Charm", "Shards of Alara", "ALA");
  }
}

module.exports = BantCharm;
