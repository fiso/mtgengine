"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BoundingKrasis extends Card {
  constructor(game) {
    super(game, "Bounding Krasis", "Magic Origins", "ORI");
  }
}

module.exports = BoundingKrasis;
