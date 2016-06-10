"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SkyDiamond extends UnimplementedCard {
  constructor (game) {
    super(game, "Sky Diamond", "Classic Sixth Edition", "6ED");
  }
}

module.exports = SkyDiamond;
