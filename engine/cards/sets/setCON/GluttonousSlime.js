"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GluttonousSlime extends UnimplementedCard {
  constructor(game) {
    super(game, "Gluttonous Slime", "Conflux", "CON");
  }
}

module.exports = GluttonousSlime;
