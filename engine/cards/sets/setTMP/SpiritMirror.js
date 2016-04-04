"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SpiritMirror extends Card {
  constructor(game) {
    super(game, "Spirit Mirror", "Tempest", "TMP");
  }
}

module.exports = SpiritMirror;
