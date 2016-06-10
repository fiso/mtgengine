"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MizziumSkin extends UnimplementedCard {
  constructor (game) {
    super(game, "Mizzium Skin", "Return to Ravnica", "RTR");
  }
}

module.exports = MizziumSkin;
