"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WaywardSoul extends UnimplementedCard {
  constructor (game) {
    super(game, "Wayward Soul", "Tempest Remastered", "TPR");
  }
}

module.exports = WaywardSoul;
