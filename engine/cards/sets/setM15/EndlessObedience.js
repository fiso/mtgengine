"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EndlessObedience extends UnimplementedCard {
  constructor(game) {
    super(game, "Endless Obedience", "Magic 2015 Core Set", "M15");
  }
}

module.exports = EndlessObedience;
