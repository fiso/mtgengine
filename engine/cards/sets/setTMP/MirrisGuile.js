"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MirrisGuile extends Card {
  constructor(game) {
    super(game, "Mirri's Guile", "Tempest", "TMP");
  }
}

module.exports = MirrisGuile;
