"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FurtiveHomunculus extends UnimplementedCard {
  constructor(game) {
    super(game, "Furtive Homunculus", "Shadows over Innistrad", "SOI");
  }
}

module.exports = FurtiveHomunculus;
