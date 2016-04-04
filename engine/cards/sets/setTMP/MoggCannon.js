"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MoggCannon extends Card {
  constructor(game) {
    super(game, "Mogg Cannon", "Tempest", "TMP");
  }
}

module.exports = MoggCannon;
