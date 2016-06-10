"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CloneLegion extends UnimplementedCard {
  constructor (game) {
    super(game, "Clone Legion", "Dragons of Tarkir", "DTK");
  }
}

module.exports = CloneLegion;
