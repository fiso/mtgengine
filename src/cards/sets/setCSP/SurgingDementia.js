"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SurgingDementia extends UnimplementedCard {
  constructor (game) {
    super(game, "Surging Dementia", "Coldsnap", "CSP");
  }
}

module.exports = SurgingDementia;
