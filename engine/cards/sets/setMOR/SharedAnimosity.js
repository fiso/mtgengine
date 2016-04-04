"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SharedAnimosity extends Card {
  constructor(game) {
    super(game, "Shared Animosity", "Morningtide", "MOR");
  }
}

module.exports = SharedAnimosity;
