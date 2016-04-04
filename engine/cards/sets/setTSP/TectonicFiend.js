"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TectonicFiend extends UnimplementedCard {
  constructor(game) {
    super(game, "Tectonic Fiend", "Time Spiral", "TSP");
  }
}

module.exports = TectonicFiend;
