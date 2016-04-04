"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Feint extends Card {
  constructor(game) {
    super(game, "Feint", "Legends", "LEG");
  }
}

module.exports = Feint;
