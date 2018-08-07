"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AvatarofFury extends UnimplementedCard {
  constructor (game) {
    super(game, "Avatar of Fury", "Archenemy: Nicol Bolas", "E01");
  }
}

module.exports = AvatarofFury;
