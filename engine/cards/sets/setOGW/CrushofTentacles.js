"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CrushofTentacles extends UnimplementedCard {
  constructor(game) {
    super(game, "Crush of Tentacles", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = CrushofTentacles;
