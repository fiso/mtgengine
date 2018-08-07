"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Flickerwisp extends UnimplementedCard {
  constructor (game) {
    super(game, "Flickerwisp", "Archenemy: Nicol Bolas", "E01");
  }
}

module.exports = Flickerwisp;
