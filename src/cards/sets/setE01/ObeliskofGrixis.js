"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ObeliskofGrixis extends UnimplementedCard {
  constructor (game) {
    super(game, "Obelisk of Grixis", "Archenemy: Nicol Bolas", "E01");
  }
}

module.exports = ObeliskofGrixis;
