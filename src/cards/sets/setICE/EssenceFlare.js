"use strict";
const Constants = require ("../../../Constants");
const EssenceFlareBase = require("../setCST/EssenceFlare");

class EssenceFlare extends EssenceFlareBase {
  constructor (game) {
    super(game, "Essence Flare", "Ice Age", "ICE");
  }
}

module.exports = EssenceFlare;
