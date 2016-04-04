"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WorldlyCounsel extends Card {
  constructor(game) {
    super(game, "Worldly Counsel", "Conflux", "CON");
  }
}

module.exports = WorldlyCounsel;
