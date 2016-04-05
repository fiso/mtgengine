"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SoulSeizer extends UnimplementedCard {
  constructor(game) {
    super(game, "Soul Seizer", "Dark Ascension", "DKA");
  }
}

module.exports = SoulSeizer;
