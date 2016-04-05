"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CabalPatriarch extends UnimplementedCard {
  constructor(game) {
    super(game, "Cabal Patriarch", "Odyssey", "ODY");
  }
}

module.exports = CabalPatriarch;
