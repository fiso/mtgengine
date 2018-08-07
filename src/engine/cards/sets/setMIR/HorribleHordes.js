"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HorribleHordes extends UnimplementedCard {
  constructor (game) {
    super(game, "Horrible Hordes", "Mirage", "MIR");
  }
}

module.exports = HorribleHordes;
