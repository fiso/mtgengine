"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KnightofDawn extends Card {
  constructor(game) {
    super(game, "Knight of Dawn", "Tempest", "TMP");
  }
}

module.exports = KnightofDawn;
