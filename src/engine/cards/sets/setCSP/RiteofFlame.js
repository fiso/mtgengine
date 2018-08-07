"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RiteofFlame extends UnimplementedCard {
  constructor (game) {
    super(game, "Rite of Flame", "Coldsnap", "CSP");
  }
}

module.exports = RiteofFlame;
