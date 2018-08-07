"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VraskasConquistador extends UnimplementedCard {
  constructor (game) {
    super(game, "Vraska's Conquistador", "Rivals of Ixalan", "RIX");
  }
}

module.exports = VraskasConquistador;
