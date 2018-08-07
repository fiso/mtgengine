"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class InfernoJet extends UnimplementedCard {
  constructor (game) {
    super(game, "Inferno Jet", "Hour of Devastation", "HOU");
  }
}

module.exports = InfernoJet;
