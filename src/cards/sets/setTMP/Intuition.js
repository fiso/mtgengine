"use strict";
const Constants = require ("../../../Constants");
const IntuitionBase = require("../setpJGP/Intuition");

class Intuition extends IntuitionBase {
  constructor (game) {
    super(game, "Intuition", "Tempest", "TMP");
  }
}

module.exports = Intuition;
