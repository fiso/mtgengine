"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CoverofWinter extends UnimplementedCard {
  constructor(game) {
    super(game, "Cover of Winter", "Coldsnap", "CSP");
  }
}

module.exports = CoverofWinter;
