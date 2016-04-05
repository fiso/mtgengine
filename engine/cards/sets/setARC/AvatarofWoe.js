"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AvatarofWoe extends UnimplementedCard {
  constructor(game) {
    super(game, "Avatar of Woe", "Archenemy", "ARC");
  }
}

module.exports = AvatarofWoe;
