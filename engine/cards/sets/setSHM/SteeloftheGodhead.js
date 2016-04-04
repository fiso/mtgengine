"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SteeloftheGodheadBase = require("../setDDI/SteeloftheGodhead.js");

class SteeloftheGodhead extends SteeloftheGodheadBase {
  constructor(game) {
    super(game, "Steel of the Godhead", "Shadowmoor", "SHM");
  }
}

module.exports = SteeloftheGodhead;
