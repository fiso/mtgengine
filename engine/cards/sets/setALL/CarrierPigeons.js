"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CarrierPigeons extends Card {
  constructor(game) {
    super(game, "Carrier Pigeons", "Alliances", "ALL");
  }
}

module.exports = CarrierPigeons;
