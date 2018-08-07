"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WailingGhoul extends UnimplementedCard {
  constructor (game) {
    super(game, "Wailing Ghoul", "Eldritch Moon", "EMN");
  }
}

module.exports = WailingGhoul;
