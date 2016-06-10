"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NestedGhoul extends UnimplementedCard {
  constructor (game) {
    super(game, "Nested Ghoul", "Mirrodin Besieged", "MBS");
  }
}

module.exports = NestedGhoul;
