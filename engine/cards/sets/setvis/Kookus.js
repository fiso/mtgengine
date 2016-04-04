"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Kookus extends Card {
  constructor(game) {
    super(game, "Kookus", "Visions", "VIS");
  }
}

module.exports = Kookus;
