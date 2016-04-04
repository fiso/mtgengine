"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RustingGolem extends Card {
  constructor(game) {
    super(game, "Rusting Golem", "Nemesis", "NMS");
  }
}

module.exports = RustingGolem;
