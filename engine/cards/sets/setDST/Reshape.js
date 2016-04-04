"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Reshape extends Card {
  constructor(game) {
    super(game, "Reshape", "Darksteel", "DST");
  }
}

module.exports = Reshape;
