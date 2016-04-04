"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SparringGolem extends Card {
  constructor(game) {
    super(game, "Sparring Golem", "Invasion", "INV");
  }
}

module.exports = SparringGolem;
