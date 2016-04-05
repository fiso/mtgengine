"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ForcedFruition extends UnimplementedCard {
  constructor(game) {
    super(game, "Forced Fruition", "Lorwyn", "LRW");
  }
}

module.exports = ForcedFruition;
