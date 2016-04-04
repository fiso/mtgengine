"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CaptainsCall extends UnimplementedCard {
  constructor(game) {
    super(game, "Captain's Call", "Magic 2013", "M13");
  }
}

module.exports = CaptainsCall;
