"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BullElephant extends UnimplementedCard {
  constructor (game) {
    super(game, "Bull Elephant", "Visions", "VIS");
  }
}

module.exports = BullElephant;
