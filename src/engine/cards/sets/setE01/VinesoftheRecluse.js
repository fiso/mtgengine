"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VinesoftheRecluse extends UnimplementedCard {
  constructor (game) {
    super(game, "Vines of the Recluse", "Archenemy: Nicol Bolas", "E01");
  }
}

module.exports = VinesoftheRecluse;
