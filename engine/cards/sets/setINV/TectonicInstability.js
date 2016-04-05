"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TectonicInstability extends UnimplementedCard {
  constructor(game) {
    super(game, "Tectonic Instability", "Invasion", "INV");
  }
}

module.exports = TectonicInstability;
