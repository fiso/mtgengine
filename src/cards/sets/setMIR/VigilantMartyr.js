"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VigilantMartyr extends UnimplementedCard {
  constructor (game) {
    super(game, "Vigilant Martyr", "Mirage", "MIR");
  }
}

module.exports = VigilantMartyr;
