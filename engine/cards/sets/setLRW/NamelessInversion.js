"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NamelessInversion extends Card {
  constructor(game) {
    super(game, "Nameless Inversion", "Lorwyn", "LRW");
  }
}

module.exports = NamelessInversion;
