"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FuneralMarch extends UnimplementedCard {
  constructor (game) {
    super(game, "Funeral March", "Masters Edition II", "ME2");
  }
}

module.exports = FuneralMarch;
