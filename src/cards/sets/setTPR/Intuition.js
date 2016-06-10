"use strict";
const Constants = require ("../../../Constants");
const IntuitionBase = require("../setpJGP/Intuition");

class Intuition extends IntuitionBase {
  constructor (game) {
    super(game, "Intuition", "Tempest Remastered", "TPR");
  }
}

module.exports = Intuition;
