"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RimeboundDead extends UnimplementedCard {
  constructor (game) {
    super(game, "Rimebound Dead", "Coldsnap", "CSP");
  }
}

module.exports = RimeboundDead;
