"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DarkTriumph extends UnimplementedCard {
  constructor (game) {
    super(game, "Dark Triumph", "Nemesis", "NEM");
  }
}

module.exports = DarkTriumph;
