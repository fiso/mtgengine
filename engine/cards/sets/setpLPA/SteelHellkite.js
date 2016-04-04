"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SteelHellkiteBase = require("../setC14/SteelHellkite.js");

class SteelHellkite extends SteelHellkiteBase {
  constructor(game) {
    super(game, "Steel Hellkite", "Launch Parties", "pLPA");
  }
}

module.exports = SteelHellkite;
