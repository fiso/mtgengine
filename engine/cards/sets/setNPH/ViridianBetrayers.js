"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ViridianBetrayers extends UnimplementedCard {
  constructor(game) {
    super(game, "Viridian Betrayers", "New Phyrexia", "NPH");
  }
}

module.exports = ViridianBetrayers;
