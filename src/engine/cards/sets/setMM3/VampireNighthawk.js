"use strict";
const Constants = require ("../../../Constants");
const VampireNighthawkBase = require("../setE02/VampireNighthawk");

class VampireNighthawk extends VampireNighthawkBase {
  constructor (game) {
    super(game, "Vampire Nighthawk", "Modern Masters 2017", "MM3");
  }
}

module.exports = VampireNighthawk;
