"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ScrapdiverSerpent extends UnimplementedCard {
  constructor(game) {
    super(game, "Scrapdiver Serpent", "Scars of Mirrodin", "SOM");
  }
}

module.exports = ScrapdiverSerpent;
