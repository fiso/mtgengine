"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BurningAnger extends UnimplementedCard {
  constructor (game) {
    super(game, "Burning Anger", "Magic 2015", "M15");
  }
}

module.exports = BurningAnger;
