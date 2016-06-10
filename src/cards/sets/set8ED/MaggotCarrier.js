"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MaggotCarrier extends UnimplementedCard {
  constructor (game) {
    super(game, "Maggot Carrier", "Eighth Edition", "8ED");
  }
}

module.exports = MaggotCarrier;
