"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FrostMarsh extends UnimplementedCard {
  constructor(game) {
    super(game, "Frost Marsh", "Coldsnap", "CSP");
  }
}

module.exports = FrostMarsh;
