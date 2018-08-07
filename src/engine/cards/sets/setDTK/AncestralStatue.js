"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AncestralStatue extends UnimplementedCard {
  constructor (game) {
    super(game, "Ancestral Statue", "Dragons of Tarkir", "DTK");
  }
}

module.exports = AncestralStatue;
