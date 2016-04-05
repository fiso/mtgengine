"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SuddenReclamation extends UnimplementedCard {
  constructor(game) {
    super(game, "Sudden Reclamation", "Fate Reforged", "FRF");
  }
}

module.exports = SuddenReclamation;
