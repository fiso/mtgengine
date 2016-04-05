"use strict";
const Constants = require ("../../../Constants");
const ShivanHellkiteBase = require("../setDDG/ShivanHellkite");

class ShivanHellkite extends ShivanHellkiteBase {
  constructor(game) {
    super(game, "Shivan Hellkite", "Tenth Edition", "10E");
  }
}

module.exports = ShivanHellkite;
