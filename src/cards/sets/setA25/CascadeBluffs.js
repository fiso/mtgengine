"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CascadeBluffs extends UnimplementedCard {
  constructor (game) {
    super(game, "Cascade Bluffs", "Masters 25", "A25");
  }
}

module.exports = CascadeBluffs;
