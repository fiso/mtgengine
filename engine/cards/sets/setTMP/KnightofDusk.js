"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KnightofDusk extends Card {
  constructor(game) {
    super(game, "Knight of Dusk", "Tempest", "TMP");
  }
}

module.exports = KnightofDusk;
