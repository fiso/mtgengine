"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GrimLavamancer extends UnimplementedCard {
  constructor (game) {
    super(game, "Grim Lavamancer", "Archenemy: Nicol Bolas", "E01");
  }
}

module.exports = GrimLavamancer;
