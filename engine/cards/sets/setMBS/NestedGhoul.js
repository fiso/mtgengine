"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NestedGhoul extends Card {
  constructor(game) {
    super(game, "Nested Ghoul", "Mirrodin Besieged", "MBS");
  }
}

module.exports = NestedGhoul;
