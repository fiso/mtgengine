"use strict";
const Constants = require ("../../../Constants");
const HellionBase = require("../setTPCA/Hellion");

class Hellion extends HellionBase {
  constructor (game) {
    super(game, "Hellion", "Rise of the Eldrazi Tokens", "TROE");
  }
}

module.exports = Hellion;
