"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Grindclock extends UnimplementedCard {
  constructor (game) {
    super(game, "Grindclock", "Magic 2015", "M15");
  }
}

module.exports = Grindclock;
