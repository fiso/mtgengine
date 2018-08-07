"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SacredBoon extends UnimplementedCard {
  constructor (game) {
    super(game, "Sacred Boon", "Masters Edition II", "ME2");
  }
}

module.exports = SacredBoon;
