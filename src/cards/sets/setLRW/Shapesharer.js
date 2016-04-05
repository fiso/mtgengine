"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Shapesharer extends UnimplementedCard {
  constructor(game) {
    super(game, "Shapesharer", "Lorwyn", "LRW");
  }
}

module.exports = Shapesharer;
