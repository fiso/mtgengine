"use strict";
const Constants = require ("../../../Constants");
const WaxWaneBase = require("../setARC/WaxWane");

class WaxWane extends WaxWaneBase {
  constructor (game) {
    super(game, "Wax // Wane", "Invasion", "INV");
  }
}

module.exports = WaxWane;
