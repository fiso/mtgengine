"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Kaleidostone extends Card {
  constructor(game) {
    super(game, "Kaleidostone", "Conflux", "CON");
  }
}

module.exports = Kaleidostone;
