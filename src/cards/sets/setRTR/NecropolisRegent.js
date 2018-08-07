"use strict";
const Constants = require ("../../../Constants");
const NecropolisRegentBase = require("../setE02/NecropolisRegent");

class NecropolisRegent extends NecropolisRegentBase {
  constructor (game) {
    super(game, "Necropolis Regent", "Return to Ravnica", "RTR");
  }
}

module.exports = NecropolisRegent;
