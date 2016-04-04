"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CaptivatingVampire extends Card {
  constructor(game) {
    super(game, "Captivating Vampire", "Magic 2011", "M11");
  }
}

module.exports = CaptivatingVampire;
