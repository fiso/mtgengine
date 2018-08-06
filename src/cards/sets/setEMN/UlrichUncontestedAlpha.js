"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UlrichUncontestedAlpha extends UnimplementedCard {
  constructor (game) {
    super(game, "Ulrich, Uncontested Alpha", "Eldritch Moon", "EMN");
  }
}

module.exports = UlrichUncontestedAlpha;
