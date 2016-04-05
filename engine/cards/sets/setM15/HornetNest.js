"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HornetNest extends UnimplementedCard {
  constructor(game) {
    super(game, "Hornet Nest", "Magic 2015 Core Set", "M15");
  }
}

module.exports = HornetNest;
