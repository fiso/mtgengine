"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BrokenAmbitions extends UnimplementedCard {
  constructor (game) {
    super(game, "Broken Ambitions", "Lorwyn", "LRW");
  }
}

module.exports = BrokenAmbitions;
