"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AdvancedStitchwing extends UnimplementedCard {
  constructor (game) {
    super(game, "Advanced Stitchwing", "Eldritch Moon", "EMN");
  }
}

module.exports = AdvancedStitchwing;
