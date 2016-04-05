"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VampireNoble extends UnimplementedCard {
  constructor(game) {
    super(game, "Vampire Noble", "Shadows over Innistrad", "SOI");
  }
}

module.exports = VampireNoble;
