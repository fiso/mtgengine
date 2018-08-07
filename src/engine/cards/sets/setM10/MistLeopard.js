"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MistLeopard extends UnimplementedCard {
  constructor (game) {
    super(game, "Mist Leopard", "Magic 2010", "M10");
  }
}

module.exports = MistLeopard;
