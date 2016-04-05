"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OrcishParatroopers extends UnimplementedCard {
  constructor(game) {
    super(game, "Orcish Paratroopers", "Unhinged", "UNH");
  }
}

module.exports = OrcishParatroopers;
