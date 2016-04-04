"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Thornling extends Card {
  constructor(game) {
    super(game, "Thornling", "Conflux", "CON");
  }
}

module.exports = Thornling;
