"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Paleoloth extends Card {
  constructor(game) {
    super(game, "Paleoloth", "Conflux", "CON");
  }
}

module.exports = Paleoloth;
