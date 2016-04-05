"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SurgingMight extends UnimplementedCard {
  constructor(game) {
    super(game, "Surging Might", "Coldsnap", "CSP");
  }
}

module.exports = SurgingMight;
