"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TectonicInstability extends Card {
  constructor(game) {
    super(game, "Tectonic Instability", "Invasion", "INV");
  }
}

module.exports = TectonicInstability;
