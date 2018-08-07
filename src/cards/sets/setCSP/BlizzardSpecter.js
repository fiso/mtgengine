"use strict";
const Constants = require ("../../../Constants");
const BlizzardSpecterBase = require("../setIMA/BlizzardSpecter");

class BlizzardSpecter extends BlizzardSpecterBase {
  constructor (game) {
    super(game, "Blizzard Specter", "Coldsnap", "CSP");
  }
}

module.exports = BlizzardSpecter;
