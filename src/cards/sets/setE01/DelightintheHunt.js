"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DelightintheHunt extends UnimplementedCard {
  constructor (game) {
    super(game, "Delight in the Hunt", "Archenemy: Nicol Bolas", "E01");
  }
}

module.exports = DelightintheHunt;
