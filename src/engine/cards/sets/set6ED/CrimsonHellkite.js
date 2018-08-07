"use strict";
const Constants = require ("../../../Constants");
const CrimsonHellkiteBase = require("../set7ED/CrimsonHellkite");

class CrimsonHellkite extends CrimsonHellkiteBase {
  constructor (game) {
    super(game, "Crimson Hellkite", "Classic Sixth Edition", "6ED");
  }
}

module.exports = CrimsonHellkite;
