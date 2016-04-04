"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CorpseDance extends Card {
  constructor(game) {
    super(game, "Corpse Dance", "Tempest", "TMP");
  }
}

module.exports = CorpseDance;
