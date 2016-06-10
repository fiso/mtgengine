"use strict";
const Constants = require ("../../../Constants");
const SteelHellkiteBase = require("../setC14/SteelHellkite");

class SteelHellkite extends SteelHellkiteBase {
  constructor (game) {
    super(game, "Steel Hellkite", "Launch Parties", "pLPA");
  }
}

module.exports = SteelHellkite;
