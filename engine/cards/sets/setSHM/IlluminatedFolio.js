"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IlluminatedFolio extends UnimplementedCard {
  constructor(game) {
    super(game, "Illuminated Folio", "Shadowmoor", "SHM");
  }
}

module.exports = IlluminatedFolio;
