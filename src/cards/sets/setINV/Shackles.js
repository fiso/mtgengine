"use strict";
const Constants = require ("../../../Constants");
const ShacklesBase = require("../setEXO/Shackles");

class Shackles extends ShacklesBase {
  constructor (game) {
    super(game, "Shackles", "Invasion", "INV");
  }
}

module.exports = Shackles;
