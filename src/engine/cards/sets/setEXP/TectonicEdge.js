"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TectonicEdge extends UnimplementedCard {
  constructor (game) {
    super(game, "Tectonic Edge", "Zendikar Expeditions", "EXP");
  }
}

module.exports = TectonicEdge;
