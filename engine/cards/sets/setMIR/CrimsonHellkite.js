"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CrimsonHellkiteBase = require("../set6ED/CrimsonHellkite.js");

class CrimsonHellkite extends CrimsonHellkiteBase {
  constructor(game) {
    super(game, "Crimson Hellkite", "Mirage", "MIR");
  }
}

module.exports = CrimsonHellkite;
