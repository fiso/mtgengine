"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AethersphereHarvester extends UnimplementedCard {
  constructor (game) {
    super(game, "Aethersphere Harvester", "Aether Revolt", "AER");
  }
}

module.exports = AethersphereHarvester;
