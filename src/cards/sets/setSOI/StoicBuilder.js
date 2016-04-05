"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StoicBuilder extends UnimplementedCard {
  constructor(game) {
    super(game, "Stoic Builder", "Shadows over Innistrad", "SOI");
  }
}

module.exports = StoicBuilder;
