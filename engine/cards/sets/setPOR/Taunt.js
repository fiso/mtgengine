"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Taunt extends Card {
  constructor(game) {
    super(game, "Taunt", "Portal", "POR");
  }
}

module.exports = Taunt;
