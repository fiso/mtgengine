"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Agility extends Card {
  constructor(game) {
    super(game, "Agility", "Mirage", "MIR");
  }
}

module.exports = Agility;
