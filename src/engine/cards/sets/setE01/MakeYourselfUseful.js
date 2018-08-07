"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MakeYourselfUseful extends UnimplementedCard {
  constructor (game) {
    super(game, "Make Yourself Useful", "Archenemy: Nicol Bolas", "E01");
  }
}

module.exports = MakeYourselfUseful;
