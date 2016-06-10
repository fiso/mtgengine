"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SludgeStrider extends UnimplementedCard {
  constructor (game) {
    super(game, "Sludge Strider", "Conflux", "CON");
  }
}

module.exports = SludgeStrider;
