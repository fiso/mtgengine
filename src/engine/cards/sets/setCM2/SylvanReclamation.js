"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SylvanReclamation extends UnimplementedCard {
  constructor (game) {
    super(game, "Sylvan Reclamation", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = SylvanReclamation;
