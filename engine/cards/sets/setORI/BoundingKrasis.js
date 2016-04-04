"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BoundingKrasis extends UnimplementedCard {
  constructor(game) {
    super(game, "Bounding Krasis", "Magic Origins", "ORI");
  }
}

module.exports = BoundingKrasis;
