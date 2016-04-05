"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WildwoodGeist extends UnimplementedCard {
  constructor(game) {
    super(game, "Wildwood Geist", "Avacyn Restored", "AVR");
  }
}

module.exports = WildwoodGeist;
