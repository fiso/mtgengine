"use strict";
const Constants = require ("../../../Constants");
const BurnfromWithinBase = require("../setSOI/BurnfromWithin");

class BurnfromWithin extends BurnfromWithinBase {
  constructor (game) {
    super(game, "Burn from Within", "Shadows over Innistrad Promos", "PSOI");
  }
}

module.exports = BurnfromWithin;
