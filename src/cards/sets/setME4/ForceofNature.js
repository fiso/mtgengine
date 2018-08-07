"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ForceofNature extends UnimplementedCard {
  constructor (game) {
    super(game, "Force of Nature", "Masters Edition IV", "ME4");
  }
}

module.exports = ForceofNature;
