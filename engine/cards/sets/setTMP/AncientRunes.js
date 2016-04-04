"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AncientRunes extends Card {
  constructor(game) {
    super(game, "Ancient Runes", "Tempest", "TMP");
  }
}

module.exports = AncientRunes;
