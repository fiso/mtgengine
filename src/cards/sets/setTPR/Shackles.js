"use strict";
const Constants = require ("../../../Constants");
const ShacklesBase = require("../setEXO/Shackles");

class Shackles extends ShacklesBase {
  constructor (game) {
    super(game, "Shackles", "Tempest Remastered", "TPR");
  }
}

module.exports = Shackles;
