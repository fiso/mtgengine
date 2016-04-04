"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class JunkGolem extends Card {
  constructor(game) {
    super(game, "Junk Golem", "Odyssey", "ODY");
  }
}

module.exports = JunkGolem;
