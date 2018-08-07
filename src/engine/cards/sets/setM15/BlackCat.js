"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BlackCat extends UnimplementedCard {
  constructor (game) {
    super(game, "Black Cat", "Magic 2015", "M15");
  }
}

module.exports = BlackCat;
