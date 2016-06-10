"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RimeDryad extends UnimplementedCard {
  constructor (game) {
    super(game, "Rime Dryad", "Ice Age", "ICE");
  }
}

module.exports = RimeDryad;
