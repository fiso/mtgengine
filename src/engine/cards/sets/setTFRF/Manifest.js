"use strict";
const Constants = require ("../../../Constants");
const ManifestBase = require("../setTC18/Manifest");

class Manifest extends ManifestBase {
  constructor (game) {
    super(game, "Manifest", "Fate Reforged Tokens", "TFRF");
  }
}

module.exports = Manifest;
