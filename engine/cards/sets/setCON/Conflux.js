"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Conflux extends Card {
  constructor(game) {
    super(game, "Conflux", "Conflux", "CON");
  }
}

module.exports = Conflux;
