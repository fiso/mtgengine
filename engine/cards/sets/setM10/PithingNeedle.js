"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PithingNeedle extends UnimplementedCard {
  constructor(game) {
    super(game, "Pithing Needle", "Magic 2010", "M10");
  }
}

module.exports = PithingNeedle;
