"use strict";
const Constants = require ("../../../Constants");
const AethersphereHarvesterBase = require("../setAER/AethersphereHarvester");

class AethersphereHarvester extends AethersphereHarvesterBase {
  constructor (game) {
    super(game, "Aethersphere Harvester", "Aether Revolt Promos", "PAER");
  }
}

module.exports = AethersphereHarvester;
