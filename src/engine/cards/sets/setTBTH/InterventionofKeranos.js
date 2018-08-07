"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class InterventionofKeranos extends UnimplementedCard {
  constructor (game) {
    super(game, "Intervention of Keranos", "Battle the Horde", "TBTH");
  }
}

module.exports = InterventionofKeranos;
