"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AlabornMusketeer extends Card {
  constructor(game) {
    super(game, "Alaborn Musketeer", "Masters Edition IV", "ME4");
  }
}

module.exports = AlabornMusketeer;
