"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SnappingCreeper extends UnimplementedCard {
  constructor (game) {
    super(game, "Snapping Creeper", "Worldwake", "WWK");
  }
}

module.exports = SnappingCreeper;
