"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WintersGrasp extends UnimplementedCard {
  constructor(game) {
    super(game, "Winter's Grasp", "Portal", "POR");
  }
}

module.exports = WintersGrasp;
