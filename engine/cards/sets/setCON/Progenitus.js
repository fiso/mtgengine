"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Progenitus extends Card {
  constructor(game) {
    super(game, "Progenitus", "Conflux", "CON");
  }
}

module.exports = Progenitus;
