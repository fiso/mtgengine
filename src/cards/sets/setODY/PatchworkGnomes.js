"use strict";
const Constants = require ("../../../Constants");
const PatchworkGnomesBase = require("../setTPR/PatchworkGnomes");

class PatchworkGnomes extends PatchworkGnomesBase {
  constructor (game) {
    super(game, "Patchwork Gnomes", "Odyssey", "ODY");
  }
}

module.exports = PatchworkGnomes;
