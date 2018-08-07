"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CutRibbons extends UnimplementedCard {
  constructor (game) {
    super(game, "Cut // Ribbons", "Amonkhet", "AKH");
  }
}

module.exports = CutRibbons;
