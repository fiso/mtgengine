"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PitilessVizier extends UnimplementedCard {
  constructor (game) {
    super(game, "Pitiless Vizier", "Amonkhet", "AKH");
  }
}

module.exports = PitilessVizier;
