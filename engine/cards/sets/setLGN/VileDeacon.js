"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VileDeacon extends UnimplementedCard {
  constructor(game) {
    super(game, "Vile Deacon", "Legions", "LGN");
  }
}

module.exports = VileDeacon;
