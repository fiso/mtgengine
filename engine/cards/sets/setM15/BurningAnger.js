"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BurningAnger extends UnimplementedCard {
  constructor(game) {
    super(game, "Burning Anger", "Magic 2015 Core Set", "M15");
  }
}

module.exports = BurningAnger;
