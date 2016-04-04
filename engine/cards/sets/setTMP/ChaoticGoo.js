"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ChaoticGoo extends Card {
  constructor(game) {
    super(game, "Chaotic Goo", "Tempest", "TMP");
  }
}

module.exports = ChaoticGoo;
