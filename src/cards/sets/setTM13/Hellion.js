"use strict";
const Constants = require ("../../../Constants");
const HellionBase = require("../setTPCA/Hellion");

class Hellion extends HellionBase {
  constructor (game) {
    super(game, "Hellion", "Magic 2013 Tokens", "TM13");
  }
}

module.exports = Hellion;
