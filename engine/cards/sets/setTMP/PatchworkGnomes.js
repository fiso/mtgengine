"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PatchworkGnomesBase = require("../setODY/PatchworkGnomes.js");

class PatchworkGnomes extends PatchworkGnomesBase {
  constructor(game) {
    super(game, "Patchwork Gnomes", "Tempest", "TMP");
  }
}

module.exports = PatchworkGnomes;
