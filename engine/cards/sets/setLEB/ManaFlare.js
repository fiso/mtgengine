"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ManaFlareBase = require("../setCED/ManaFlare.js");

class ManaFlare extends ManaFlareBase {
  constructor(game) {
    super(game, "Mana Flare", "Limited Edition Beta", "LEB");
  }
}

module.exports = ManaFlare;
