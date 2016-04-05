"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Subdue extends UnimplementedCard {
  constructor(game) {
    super(game, "Subdue", "Legends", "LEG");
  }
}

module.exports = Subdue;
