"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NeedleDrop extends UnimplementedCard {
  constructor(game) {
    super(game, "Needle Drop", "Lorwyn", "LRW");
  }
}

module.exports = NeedleDrop;
