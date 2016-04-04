"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SagesDousing extends Card {
  constructor(game) {
    super(game, "Sage's Dousing", "Morningtide", "MOR");
  }
}

module.exports = SagesDousing;
