"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MercenaryKnight extends UnimplementedCard {
  constructor (game) {
    super(game, "Mercenary Knight", "Portal", "POR");
  }
}

module.exports = MercenaryKnight;
