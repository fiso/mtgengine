"use strict";
const Constants = require ("../../../Constants");
const WaneBase = require("../setARC/Wane");

class Wane extends WaneBase {
  constructor (game) {
    super(game, "Wane", "Invasion", "INV");
  }
}

module.exports = Wane;
