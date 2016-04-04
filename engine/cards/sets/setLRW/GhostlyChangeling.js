"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GhostlyChangeling extends UnimplementedCard {
  constructor(game) {
    super(game, "Ghostly Changeling", "Lorwyn", "LRW");
  }
}

module.exports = GhostlyChangeling;
