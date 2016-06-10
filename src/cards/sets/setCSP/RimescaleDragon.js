"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RimescaleDragon extends UnimplementedCard {
  constructor (game) {
    super(game, "Rimescale Dragon", "Coldsnap", "CSP");
  }
}

module.exports = RimescaleDragon;
