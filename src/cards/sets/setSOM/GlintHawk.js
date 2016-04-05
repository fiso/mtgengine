"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GlintHawk extends UnimplementedCard {
  constructor(game) {
    super(game, "Glint Hawk", "Scars of Mirrodin", "SOM");
  }
}

module.exports = GlintHawk;
