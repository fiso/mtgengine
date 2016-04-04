"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Reap extends Card {
  constructor(game) {
    super(game, "Reap", "Tempest", "TMP");
  }
}

module.exports = Reap;
