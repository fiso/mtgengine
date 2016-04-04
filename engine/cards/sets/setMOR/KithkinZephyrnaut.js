"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KithkinZephyrnaut extends UnimplementedCard {
  constructor(game) {
    super(game, "Kithkin Zephyrnaut", "Morningtide", "MOR");
  }
}

module.exports = KithkinZephyrnaut;
