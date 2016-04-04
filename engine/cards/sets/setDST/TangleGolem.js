"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TangleGolem extends Card {
  constructor(game) {
    super(game, "Tangle Golem", "Darksteel", "DST");
  }
}

module.exports = TangleGolem;
