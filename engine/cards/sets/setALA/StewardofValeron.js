"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const StewardofValeronBase = require("../setDDG/StewardofValeron.js");

class StewardofValeron extends StewardofValeronBase {
  constructor(game) {
    super(game, "Steward of Valeron", "Shards of Alara", "ALA");
  }
}

module.exports = StewardofValeron;
