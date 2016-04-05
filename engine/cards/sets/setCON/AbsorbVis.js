"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AbsorbVis extends UnimplementedCard {
  constructor(game) {
    super(game, "Absorb Vis", "Conflux", "CON");
  }
}

module.exports = AbsorbVis;
