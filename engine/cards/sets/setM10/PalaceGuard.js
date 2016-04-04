"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PalaceGuard extends Card {
  constructor(game) {
    super(game, "Palace Guard", "Magic 2010", "M10");
  }
}

module.exports = PalaceGuard;
