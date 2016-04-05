"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HolyLight extends UnimplementedCard {
  constructor(game) {
    super(game, "Holy Light", "Masters Edition", "MED");
  }
}

module.exports = HolyLight;
