"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TempleofMalady extends Card {
  constructor(game) {
    super(game, "Temple of Malady", "Journey into Nyx", "JOU");
  }
}

module.exports = TempleofMalady;
