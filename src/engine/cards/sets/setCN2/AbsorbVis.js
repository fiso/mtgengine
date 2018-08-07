"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AbsorbVis extends UnimplementedCard {
  constructor (game) {
    super(game, "Absorb Vis", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = AbsorbVis;
