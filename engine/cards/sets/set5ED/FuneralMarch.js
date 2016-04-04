"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FuneralMarch extends UnimplementedCard {
  constructor(game) {
    super(game, "Funeral March", "Fifth Edition", "5ED");
  }
}

module.exports = FuneralMarch;
