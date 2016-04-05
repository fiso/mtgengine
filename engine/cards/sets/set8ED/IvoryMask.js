"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IvoryMask extends UnimplementedCard {
  constructor(game) {
    super(game, "Ivory Mask", "Eighth Edition", "8ED");
  }
}

module.exports = IvoryMask;
