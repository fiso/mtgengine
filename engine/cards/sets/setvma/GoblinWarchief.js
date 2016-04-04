"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GoblinWarchiefBase = require("../setDD3_EVG/GoblinWarchief.js");

class GoblinWarchief extends GoblinWarchiefBase {
  constructor(game) {
    super(game, "Goblin Warchief", "Vintage Masters", "VMA");
  }
}

module.exports = GoblinWarchief;
