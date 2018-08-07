"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IorRuinExpedition extends UnimplementedCard {
  constructor (game) {
    super(game, "Ior Ruin Expedition", "Archenemy: Nicol Bolas", "E01");
  }
}

module.exports = IorRuinExpedition;
