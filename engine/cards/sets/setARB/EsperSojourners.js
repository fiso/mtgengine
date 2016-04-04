"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EsperSojourners extends UnimplementedCard {
  constructor(game) {
    super(game, "Esper Sojourners", "Alara Reborn", "ARB");
  }
}

module.exports = EsperSojourners;
