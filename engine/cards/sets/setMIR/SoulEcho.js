"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SoulEcho extends Card {
  constructor(game) {
    super(game, "Soul Echo", "Mirage", "MIR");
  }
}

module.exports = SoulEcho;
