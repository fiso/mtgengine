"use strict";
const Constants = require ("../../../Constants");
const CrimsonHellkiteBase = require("../set6ED/CrimsonHellkite");

class CrimsonHellkite extends CrimsonHellkiteBase {
  constructor (game) {
    super(game, "Crimson Hellkite", "Seventh Edition", "7ED");
  }
}

module.exports = CrimsonHellkite;
