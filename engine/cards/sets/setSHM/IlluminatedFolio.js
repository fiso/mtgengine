"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class IlluminatedFolio extends Card {
  constructor(game) {
    super(game, "Illuminated Folio", "Shadowmoor", "SHM");
  }
}

module.exports = IlluminatedFolio;
