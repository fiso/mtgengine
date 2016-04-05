"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArcaneSpyglass extends UnimplementedCard {
  constructor(game) {
    super(game, "Arcane Spyglass", "Darksteel", "DST");
  }
}

module.exports = ArcaneSpyglass;
