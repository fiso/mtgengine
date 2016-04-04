"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SavaenElves extends Card {
  constructor(game) {
    super(game, "Savaen Elves", "The Dark", "DRK");
  }
}

module.exports = SavaenElves;
