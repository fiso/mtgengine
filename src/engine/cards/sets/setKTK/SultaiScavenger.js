"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SultaiScavenger extends UnimplementedCard {
  constructor (game) {
    super(game, "Sultai Scavenger", "Khans of Tarkir", "KTK");
  }
}

module.exports = SultaiScavenger;
