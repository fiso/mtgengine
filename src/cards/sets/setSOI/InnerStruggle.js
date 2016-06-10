"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class InnerStruggle extends UnimplementedCard {
  constructor (game) {
    super(game, "Inner Struggle", "Shadows over Innistrad", "SOI");
  }
}

module.exports = InnerStruggle;
