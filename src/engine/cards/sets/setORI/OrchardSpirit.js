"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OrchardSpirit extends UnimplementedCard {
  constructor (game) {
    super(game, "Orchard Spirit", "Magic Origins", "ORI");
  }
}

module.exports = OrchardSpirit;
