"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PineBarrens extends Card {
  constructor(game) {
    super(game, "Pine Barrens", "Tempest", "TMP");
  }
}

module.exports = PineBarrens;
