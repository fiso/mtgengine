"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const EssenceFlareBase = require("../setCST/EssenceFlare.js");

class EssenceFlare extends EssenceFlareBase {
  constructor(game) {
    super(game, "Essence Flare", "Ice Age", "ICE");
  }
}

module.exports = EssenceFlare;
