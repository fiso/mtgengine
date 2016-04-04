"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GlistenerElf extends Card {
  constructor(game) {
    super(game, "Glistener Elf", "Friday Night Magic", "pFNM");
  }
}

module.exports = GlistenerElf;
