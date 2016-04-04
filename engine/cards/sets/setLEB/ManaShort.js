"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ManaShortBase = require("../set6ED/ManaShort.js");

class ManaShort extends ManaShortBase {
  constructor(game) {
    super(game, "Mana Short", "Limited Edition Beta", "LEB");
  }
}

module.exports = ManaShort;
