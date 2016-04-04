"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CoalGolem extends Card {
  constructor(game) {
    super(game, "Coal Golem", "Masters Edition III", "ME3");
  }
}

module.exports = CoalGolem;
