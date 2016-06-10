"use strict";
const Constants = require ("../../../Constants");
const ShivanHellkiteBase = require("../setDDG/ShivanHellkite");

class ShivanHellkite extends ShivanHellkiteBase {
  constructor (game) {
    super(game, "Shivan Hellkite", "Urza's Saga", "USG");
  }
}

module.exports = ShivanHellkite;
