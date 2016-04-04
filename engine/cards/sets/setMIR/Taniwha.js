"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Taniwha extends Card {
  constructor(game) {
    super(game, "Taniwha", "Mirage", "MIR");
  }
}

module.exports = Taniwha;
