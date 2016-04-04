"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Oxidize extends Card {
  constructor(game) {
    super(game, "Oxidize", "Darksteel", "DST");
  }
}

module.exports = Oxidize;
