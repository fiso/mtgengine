"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SylvanMight extends UnimplementedCard {
  constructor (game) {
    super(game, "Sylvan Might", "Eternal Masters", "EMA");
  }
}

module.exports = SylvanMight;
