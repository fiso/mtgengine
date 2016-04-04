"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FlintGolem extends Card {
  constructor(game) {
    super(game, "Flint Golem", "Nemesis", "NMS");
  }
}

module.exports = FlintGolem;
