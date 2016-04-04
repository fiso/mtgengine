"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BogWreckage extends Card {
  constructor(game) {
    super(game, "Bog Wreckage", "Odyssey", "ODY");
  }
}

module.exports = BogWreckage;
