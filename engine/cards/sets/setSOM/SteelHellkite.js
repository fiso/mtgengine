"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SteelHellkiteBase = require("../setC14/SteelHellkite.js");

class SteelHellkite extends SteelHellkiteBase {
  constructor(game) {
    super(game, "Steel Hellkite", "Scars of Mirrodin", "SOM");
  }
}

module.exports = SteelHellkite;
