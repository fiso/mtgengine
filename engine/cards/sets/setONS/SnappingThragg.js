"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SnappingThragg extends UnimplementedCard {
  constructor(game) {
    super(game, "Snapping Thragg", "Onslaught", "ONS");
  }
}

module.exports = SnappingThragg;
