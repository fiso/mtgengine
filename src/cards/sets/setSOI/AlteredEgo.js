"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AlteredEgo extends UnimplementedCard {
  constructor(game) {
    super(game, "Altered Ego", "Shadows over Innistrad", "SOI");
  }
}

module.exports = AlteredEgo;
