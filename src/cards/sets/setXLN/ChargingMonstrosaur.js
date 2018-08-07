"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChargingMonstrosaur extends UnimplementedCard {
  constructor (game) {
    super(game, "Charging Monstrosaur", "Ixalan", "XLN");
  }
}

module.exports = ChargingMonstrosaur;
