"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShadowGlider extends UnimplementedCard {
  constructor (game) {
    super(game, "Shadow Glider", "Battle for Zendikar", "BFZ");
  }
}

module.exports = ShadowGlider;
