"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Banefire extends Card {
  constructor(game) {
    super(game, "Banefire", "Conflux", "CON");
  }
}

module.exports = Banefire;
