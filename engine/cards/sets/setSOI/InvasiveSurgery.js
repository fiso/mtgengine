"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class InvasiveSurgery extends UnimplementedCard {
  constructor(game) {
    super(game, "Invasive Surgery", "Shadows over Innistrad", "SOI");
  }
}

module.exports = InvasiveSurgery;
