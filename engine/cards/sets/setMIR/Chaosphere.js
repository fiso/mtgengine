"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Chaosphere extends Card {
  constructor(game) {
    super(game, "Chaosphere", "Mirage", "MIR");
  }
}

module.exports = Chaosphere;
