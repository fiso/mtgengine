"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OrazcaRaptor extends UnimplementedCard {
  constructor (game) {
    super(game, "Orazca Raptor", "Rivals of Ixalan", "RIX");
  }
}

module.exports = OrazcaRaptor;
