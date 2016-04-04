"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DaruLancer extends Card {
  constructor(game) {
    super(game, "Daru Lancer", "Onslaught", "ONS");
  }
}

module.exports = DaruLancer;
