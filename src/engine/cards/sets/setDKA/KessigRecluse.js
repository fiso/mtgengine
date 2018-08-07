"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KessigRecluse extends UnimplementedCard {
  constructor (game) {
    super(game, "Kessig Recluse", "Dark Ascension", "DKA");
  }
}

module.exports = KessigRecluse;
