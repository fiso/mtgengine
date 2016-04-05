"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PrimocEscapee extends UnimplementedCard {
  constructor(game) {
    super(game, "Primoc Escapee", "Legions", "LGN");
  }
}

module.exports = PrimocEscapee;
