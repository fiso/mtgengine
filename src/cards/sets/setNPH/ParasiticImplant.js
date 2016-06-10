"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ParasiticImplant extends UnimplementedCard {
  constructor (game) {
    super(game, "Parasitic Implant", "New Phyrexia", "NPH");
  }
}

module.exports = ParasiticImplant;
