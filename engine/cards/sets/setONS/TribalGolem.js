"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TribalGolem extends Card {
  constructor(game) {
    super(game, "Tribal Golem", "Onslaught", "ONS");
  }
}

module.exports = TribalGolem;
