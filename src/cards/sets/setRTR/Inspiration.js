"use strict";
const Constants = require ("../../../Constants");
const InspirationBase = require("../set6ED/Inspiration");

class Inspiration extends InspirationBase {
  constructor (game) {
    super(game, "Inspiration", "Return to Ravnica", "RTR");
  }
}

module.exports = Inspiration;
