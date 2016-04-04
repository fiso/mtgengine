"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RimeboundDead extends Card {
  constructor(game) {
    super(game, "Rimebound Dead", "Coldsnap", "CSP");
  }
}

module.exports = RimeboundDead;
