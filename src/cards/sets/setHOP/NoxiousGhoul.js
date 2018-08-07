"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NoxiousGhoul extends UnimplementedCard {
  constructor (game) {
    super(game, "Noxious Ghoul", "Planechase", "HOP");
  }
}

module.exports = NoxiousGhoul;
