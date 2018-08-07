"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HarshMercy extends UnimplementedCard {
  constructor (game) {
    super(game, "Harsh Mercy", "Onslaught", "ONS");
  }
}

module.exports = HarshMercy;
