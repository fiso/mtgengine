"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GutlessGhoul extends UnimplementedCard {
  constructor (game) {
    super(game, "Gutless Ghoul", "Coldsnap", "CSP");
  }
}

module.exports = GutlessGhoul;
