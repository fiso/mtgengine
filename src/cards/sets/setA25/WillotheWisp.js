"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WillotheWisp extends UnimplementedCard {
  constructor (game) {
    super(game, "Will-o'-the-Wisp", "Masters 25", "A25");
  }
}

module.exports = WillotheWisp;
