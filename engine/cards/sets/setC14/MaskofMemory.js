"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MaskofMemory extends UnimplementedCard {
  constructor(game) {
    super(game, "Mask of Memory", "Commander 2014", "C14");
  }
}

module.exports = MaskofMemory;
