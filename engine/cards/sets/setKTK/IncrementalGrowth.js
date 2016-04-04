"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IncrementalGrowth extends UnimplementedCard {
  constructor(game) {
    super(game, "Incremental Growth", "Khans of Tarkir", "KTK");
  }
}

module.exports = IncrementalGrowth;
