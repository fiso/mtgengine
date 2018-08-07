"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WoodSage extends UnimplementedCard {
  constructor (game) {
    super(game, "Wood Sage", "Tempest Remastered", "TPR");
  }
}

module.exports = WoodSage;
