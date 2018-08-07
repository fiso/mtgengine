"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LegionConquistador extends UnimplementedCard {
  constructor (game) {
    super(game, "Legion Conquistador", "Rivals of Ixalan", "RIX");
  }
}

module.exports = LegionConquistador;
