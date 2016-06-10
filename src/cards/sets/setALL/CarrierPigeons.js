"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CarrierPigeons extends UnimplementedCard {
  constructor (game) {
    super(game, "Carrier Pigeons", "Alliances", "ALL");
  }
}

module.exports = CarrierPigeons;
