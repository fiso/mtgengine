"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NightfireGiant extends UnimplementedCard {
  constructor (game) {
    super(game, "Nightfire Giant", "Magic 2015", "M15");
  }
}

module.exports = NightfireGiant;
