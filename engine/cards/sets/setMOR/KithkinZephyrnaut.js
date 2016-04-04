"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KithkinZephyrnaut extends Card {
  constructor(game) {
    super(game, "Kithkin Zephyrnaut", "Morningtide", "MOR");
  }
}

module.exports = KithkinZephyrnaut;
