"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Carrion extends Card {
  constructor(game) {
    super(game, "Carrion", "Mirage", "MIR");
  }
}

module.exports = Carrion;
