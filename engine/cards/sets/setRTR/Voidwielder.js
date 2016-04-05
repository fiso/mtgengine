"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Voidwielder extends UnimplementedCard {
  constructor(game) {
    super(game, "Voidwielder", "Return to Ravnica", "RTR");
  }
}

module.exports = Voidwielder;
