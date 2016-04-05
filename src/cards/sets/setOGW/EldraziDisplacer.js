"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EldraziDisplacer extends UnimplementedCard {
  constructor(game) {
    super(game, "Eldrazi Displacer", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = EldraziDisplacer;
