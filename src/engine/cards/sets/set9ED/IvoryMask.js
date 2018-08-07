"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IvoryMask extends UnimplementedCard {
  constructor (game) {
    super(game, "Ivory Mask", "Ninth Edition", "9ED");
  }
}

module.exports = IvoryMask;
