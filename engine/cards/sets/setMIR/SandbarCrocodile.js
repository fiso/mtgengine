"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SandbarCrocodile extends Card {
  constructor(game) {
    super(game, "Sandbar Crocodile", "Mirage", "MIR");
  }
}

module.exports = SandbarCrocodile;
